# typed: strict

module Homebrew
  module CLI
    class Args < OpenStruct
      def devel?; end

      def HEAD?; end

      def include_test?; end

      def build_bottle?; end

      def build_universal?; end

      def build_from_source?; end

      def named_args; end

      def force_bottle?; end

      def debug?; end

      def quiet?; end

      def verbose?; end
    end
  end
end
