# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run build` - Compile TypeScript to JavaScript (outputs to `dist/`)
- `npm install` - Install dependencies (currently only TypeScript as dev dependency)

## Architecture

This is a minimal TypeScript project structure for Discord game development.

**Key Files:**
- `package.json` - Project config with build script using TypeScript compiler
- `tsconfig.json` - TypeScript configuration: ES2016 target, CommonJS modules, strict mode enabled, outputs to `dist/`
- `src/index.ts` - Main entry point; currently contains placeholder code

**Structure:**
- `src/` - TypeScript source files
- `dist/` - Compiled JavaScript output (gitignored)
- Uses CommonJS module system for compatibility with Node.js environments

**Current State:**
- No Discord.js or other game libraries installed yet
- No test framework configured
- No linting setup
- Very minimal boilerplate project ready for Discord bot/game development

## Notes

This appears to be a starting point for a Discord game/bot. When adding Discord functionality, consider installing `discord.js` and setting up proper command handling, event management, and environment configuration for bot tokens.
