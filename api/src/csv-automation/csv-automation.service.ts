import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { MatchesService } from 'src/teams/matches.service';
import { ClubMatch } from 'src/teams/schemas/club-match.schema';
import * as moment from 'moment';
import { IMatchPlayer } from 'src/nhlapi/dtos/match-player.dto';
import * as papa from 'papaparse';

@Injectable()
export class CsvAutomationService {
  constructor(private readonly matchesService: MatchesService) {}

  async matchesToCsv(matches: ClubMatch[]): Promise<any> {
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    const matchObjects = matches.map(match => match.toObject());
    const output = {
      fields: [
        'Date',
        'Time',
        'Venue',
        'Teams',
        'Result',
        'Outcome',
        'Player',
        'POS',
        'G',
        'A',
        'P',
        'S',
        'S%',
        '+/-',
        'H',
        'FOW',
        'FOL',
        'FO%',
        'GVA',
        'TKA',
        'GWG',
        'SA',
        'GA',
        'SV',
        'SV%',
        'PSA',
        'PSSV',
        'PSSV%',
      ],
      data: [],
    };

    for (const match of matchObjects) {
      const eventDate = moment.unix(match.timestamp);
      const teams = [...match.clubs.keys()].map(key => match.clubs.get(key));
      const playersAMap: Map<string, IMatchPlayer> = [
        ...match.players.keys(),
      ].map(key => match.players.get(key))[0];
      const playersBMap: Map<string, IMatchPlayer> = [
        ...match.players.keys(),
      ].map(key => match.players.get(key))[1];
      const playersA: IMatchPlayer[] = [...playersAMap.keys()].map(key =>
        playersAMap.get(key),
      );
      const playersB: IMatchPlayer[] = [...playersBMap.keys()].map(key =>
        playersBMap.get(key),
      );

      const rowOne = [
        eventDate.format('YYYY-MM-DD'),
        eventDate.format('HH-MM-SS'),
        '',
        teams[0].get('details')?.name || 'Unkown',
        teams[0].get('score'),
        teams[0].get('result'),
        ...this.getPlayerStrings(playersA[0]),
      ];

      const playersALines = [];

      for (let i = 1, len = playersA.length; i < len; i++) {
        playersALines.push([
          '',
          '',
          '',
          '',
          '',
          '',
          ...this.getPlayerStrings(playersA[i]),
        ]);
      }

      const teamB = [
        '',
        '',
        '',
        teams[1].get('details')?.name || 'Unkown',
        teams[1].get('score'),
        teams[1].get('result'),
        ...this.getPlayerStrings(playersB[0]),
      ];

      const playersBLines = [];

      for (let i = 1, len = playersB.length; i < len; i++) {
        playersBLines.push([
          '',
          '',
          '',
          '',
          '',
          '',
          ...this.getPlayerStrings(playersB[i]),
        ]);
      }

      output.data = [
        ...output.data,
        rowOne,
        ...playersALines,
        teamB,
        ...playersBLines,
      ];
    }

    return papa.unparse(output);

    // await page.goto('https://i3hl.org/wp-admin/');

    // // Waits until the `title` meta element is rendered
    // await page.waitForSelector('title');

    // const title = await page.title();
    // console.info(`The title is: ${title}`);
    // await browser.close();
  }

  private getPlayerStrings(player: IMatchPlayer): string[] {
    return [
      player.playername,
      player.position,
      player.skgoals,
      player.skassists,
      (
        parseInt(player.skgoals, 10) + parseInt(player.skassists, 10)
      ).toString(),
      player.skshots,
      player.skshotpct,
      player.skplusmin,
      player.skhits,
      player.skfow,
      player.skfol,
      player.skfopct,
      player.skgiveaways,
      player.sktakeaways,
      player.skgwg,
      player.glshots,
      player.glga,
      player.glsaves,
      player.glsavepct,
      player.glpenshots,
      player.glpensaves,
      player.glpensavepct,
    ];
  }
}
