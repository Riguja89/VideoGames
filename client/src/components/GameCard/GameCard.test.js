import GameCard from './GameCard';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import { configure, shallow } from "enzyme";
import * as data from "./Game.json";

configure({ adapter: new Adapter() });

describe('GameCard',()=>{
    let gameCard;
    let [game1, game2, game3] = data.games;

    //onsole.log(game1)
    beforeEach(() => {
        gameCard = (game) =>
        shallow(
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              genres={game.genres}
              
            />
          );
        expect(isReact.classComponent(GameCard)).toBeFalsy();
      });

      it('Debería renderizar un tag "img" y utilizar como source la imagen del Video Juego', () => {
        expect(gameCard(game1).find("img").at(0).prop("src")).toEqual(
          game1.image
        );
        expect(gameCard(game2).find("img").at(0).prop("src")).toEqual(
          game2.image
        );
        expect(gameCard(game3).find("img").at(0).prop("src")).toEqual(
          game3.image
        );
      });

      it('Debería renderizar un "label" que contenga el texto "Name: " más el nombre del videojuego', () => {
        expect(gameCard(game1).find("label").at(0).text()).toBe(` Name: ${game1.name} `);
        expect(gameCard(game2).find("label").at(0).text()).toBe(` Name: ${game2.name} `);
        expect(gameCard(game3).find("label").at(0).text()).toBe(` Name: ${game3.name} `);
      });
    
      it('Debería renderizar un "p" que contenga el texto del nomgre de genero del video juego', () => {
        expect(gameCard(game1).find("p").at(0).text()).toBe(`${game1.genres[0].name}, `);
        expect(gameCard(game2).find("p").at(0).text()).toBe(`${game2.genres[0].name}, `);
        expect(gameCard(game3).find("p").at(0).text()).toBe(`${game3.genres[0].name}, `);
        expect(gameCard(game3).find("p").at(1).text()).toBe(`${game3.genres[1].name}, `);
      });
});

