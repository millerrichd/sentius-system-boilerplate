import { onManageActiveEffect } from "./effects.mjs";

export const SENTIUS = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
SENTIUS.abilities = {
  agi: 'SENTIUS.Ability.Agi.long',
  end: 'SENTIUS.Ability.End.long',
  qui: 'SENTIUS.Ability.Qui.long',
  str: 'SENTIUS.Ability.Str.long',
  int: 'SENTIUS.Ability.Int.long',
  pre: 'SENTIUS.Ability.Pre.long',
  rea: 'SENTIUS.Ability.Rea.long',
  wil: 'SENTIUS.Ability.Wil.long'
};

SENTIUS.abilityAbbreviations = {
  agi: 'SENTIUS.Ability.Agi.abbr',
  end: 'SENTIUS.Ability.End.abbr',
  qui: 'SENTIUS.Ability.Qui.abbr',
  str: 'SENTIUS.Ability.Str.abbr',
  int: 'SENTIUS.Ability.Int.abbr',
  pre: 'SENTIUS.Ability.Pre.abbr',
  rea: 'SENTIUS.Ability.Rea.abbr',
  wil: 'SENTIUS.Ability.Wil.abbr'
};

SENTIUS.derivedAbilities = {
  defense: 'SENTIUS.DerivedAbility.Defense.long',
  faith: 'SENTIUS.DerivedAbility.Faith.long',
  fatigue: 'SENTIUS.DerivedAbility.Fatigue.long',
  health: 'SENTIUS.DerivedAbility.Health.long',
  initiative: 'SENTIUS.DerivedAbility.Initiative.long',
  mana: 'SENTIUS.DerivedAbility.Mana.long',
  pace: 'SENTIUS.DerivedAbility.Pace.long',
  paceDie: 'SENTIUS.DerivedAbility.PaceDie.long',
  psychic: 'SENTIUS.DerivedAbility.Psychic.long',
  stability: 'SENTIUS.DerivedAbility.Stability.long'
};

SENTIUS.derivedAbilitiesAbbreviations = {
  defense: 'SENTIUS.DerivedAbility.Def.abbr',
  faith: 'SENTIUS.DerivedAbility.Fth.abbr',
  fatigue: 'SENTIUS.DerivedAbility.Fat.abbr',
  health: 'SENTIUS.DerivedAbility.Hea.abbr',
  initiative: 'SENTIUS.DerivedAbility.Ini.abbr',
  mana: 'SENTIUS.DerivedAbility.Man.abbr',
  pace: 'SENTIUS.DerivedAbility.Pac.abbr',
  paceDie: 'SENTIUS.DerivedAbility.PacD.abbr',
  psychic: 'SENTIUS.DerivedAbility.Psy.abbr',
  stability: 'SENTIUS.DerivedAbility.Sta.abbr'
};
