/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const VALIDATORS = [
  {
    name: "Oni Validator",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper16s96n9k9zztdgjy8q4qcxp4hn7ww98qk0du5jq.png",
  },
  {
    name: "Informal Systems",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5sujlhnj.png",
  },
  {
    name: "Strangelove Ventures",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper130mdu9a0etmeuw52qfxk73pn0ga6gawk2tz77l.png",
  },
  {
    name: "Cosmostation",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1t8ehvswxjfn3ejzkjtntcyrqwvmvuknzmvtaaa.png",
  },
  {
    name: "Disperze",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper194v8uwee2fvs2s8fa5k7j03ktwc87h5ym39jfv.png",
  },
  {
    name: "ECO Stake 🌱",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/evmos/evmosvaloper1umk407eed7af6anvut6llg2zevnf0dn0feqqny.png",
  },
  {
    name: "Polkachu",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/evmos/evmosvaloper125fkz3mq6qxxpkmphdl3ep92t0d3y969xmt8hz.png",
  },
  {
    name: "Golden Ratio Staking",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/evmos/evmosvaloper1t3rfzrxeslmtz62mydyf2xmmxehwk7xzaaucjd.png",
  },
  {
    name: "SG-1",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper196ax4vc0lwpxndu9dyhvca7jhxp70rmcqcnylw.png",
  },
  {
    name: "Cros-nest",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/injective/moniker/injvaloper1fqrdtx7pyps6eytn3356j9cs4f8zl0eevlt3rt.png",
  },
  {
    name: "Chill Validation",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1mzqqrctm0hvkghf66jruxjtggd5j447dmugz0j.png",
  },
  {
    name: "Imperator Co",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper17n3w6v5q3n0tws4xv8upd9ul4qqes0nlg7q0xd.png",
  },
  {
    name: "Chorus One",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper15urq2dtp9qce4fyc85m6upwm9xul304945tllg.png",
  },
  {
    name: "Citadel One",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1lzhlnpahvznwfv4jmay2tgaha5kmz5qx4cuznf.png",
  },
  {
    name: "[ block pane ]",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1sgghjqdrj9kujkx38q04d99qsljwfd6mxyrssk.png",
  },
  {
    name: "kingnodes 👑",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper10wxn2lv29yqnw2uf4jf439kwy5ef00qdelfp7r.png",
  },
  {
    name: "Lavender.Five",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/chainlist/master/chain/cosmos/moniker/cosmosvaloper140l6y2gp3gxvay6qtn70re7z2s0gn57zfd832j.png",
  },
  {
    name: "WhisperNode",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper193xl2tqh2tjkld2zv49ku5s44ee4qmgr65jcep.png",
  },
  {
    name: "jabbey",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper1xwazl8ftks4gn00y5x3c47auquc62ssuvynw64.png",
  },
  {
    name: "Enigma",
    imageURL:
      "https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/juno/junovaloper18tjj8ang9pelwxhdj8uuta6pchz292suncrlrq.png",
  },
  {
    name: "Silk Nodes",
    imageURL:
      "https://raw.githubusercontent.com/Silk-Nodes/brand-assests/main/icon/Silk_Nodes-WhiteBG_1000x1000.jpg",
  },
];

const ValidatorsSection: FC = () => {
  return (
    <div className="px-4">
      <p className="text-[#F3F6F8]/95 text-2xl text-center mb-16">
        Trusted by the top validators in Cosmos
      </p>
      <div className="flex flex-wrap justify-center w-full max-w-6xl mx-auto">
        {VALIDATORS.map((validator) => (
          <div
            className="flex flex-col justify-start sm:justify-center items-center gap-4 aspect-[12/6] pb-8 sm:pb-0 w-1/3 sm:w-1/4"
            key={validator.name}
          >
            <img
              alt={`${validator.name} logo`}
              className="w-14 h-14 rounded-full grayscale object-cover"
              src={validator.imageURL}
            />
            <p className="text-sm text-center">{validator.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValidatorsSection;
