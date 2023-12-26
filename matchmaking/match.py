from abc import abstractmethod
import subprocess
from typing import List, Type
from engine import Engine

class AbstractCGEOGame:
    """
    Base abstract class defining functions that should be implemented in a CGEO game
    """
    @abstractmethod
    def gamestate_to_args(self) -> List[str]:
        """
        Summarizes the current gamestate, or the previous action, into a command line argument
        which will be passed to the engines
        """
        pass
    
    def get_pgn_format(self) -> str:
        """
        Returns the game in a representable format (like PGN) such
        that the entire game may be reconstructed
        """
        pass
    
    def is_ongoing(self) -> bool:
        """
        Returns True if the game is still ongoing, False otherwise (result is known)
        """
        pass
    
    def forfeit(self, engine_id: int):
        """
        Forfeits the game for the given engine. Used if time limit is exceeded or runtime error
        """
        pass

class Result:
    """
    Represents the results of a match
    """
    def __init__(self, engine_paths: List[str], score_results: List[float]):
        self.engine_paths = engine_paths
        self.score_results = score_results

class Match:
    """
    Base wrapper class for handling CGEO game mechanics (like fetching moves from engines)
    
    Matches are multiple games played between engines and handle results
    """
    
    def __init__(self, game_class: AbstractCGEOGame, engines: List[Engine]):
        self.game_class = game_class
        self.gamestates = [] # store gamestates for each game played
        
        self.engines = engines
        self.results = []
    
    def run_games(self, num_games: int) -> Result:
        """
        This is the main function that runs the games
        """
        
        for _ in range(num_games):
            
            # Create a new game and play it
            self.current_game = self.game_class()            
            self.gamestates.append(self.current_game)
            
            # run the game
            while self.current_game.is_ongoing():
                # get moves from engines
                for engine in self.engines:
                    move = engine.run(self.current_game.gamestate_to_args())
                    
                    if move is None:
                        # Engine runtime error, automatically lose
                        self.current_game.forfeit(engine.id)
                        break
                    
                    self.current_game.make_move(move)