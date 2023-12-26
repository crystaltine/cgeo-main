import subprocess
from typing import List

class Engine:
    """
    Represents a single submitted bot to a CGEO contest.
    
    This class is responsible for making calls to the engine, handling errors, etc.
    """
    
    def __init__(self, lang: str, engine_path: str, name: str, id: int):
        self.lang = lang # C++, Python3, Java, NodeJS, C# will be supported
        self.run_path = engine_path
        self.name = name
        self.id = id
        
        # if language is C++, we can precompile the engine
        if lang == "cpp":
            compile_cmd = ["g++", self.engine_path, "-o", f"engine_cpp_{self.id}"]
            compile_result = subprocess.run(compile_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
            if compile_result.returncode != 0:
                raise RuntimeError(f"[C++] Engine {self.engine_name} failed to compile: {compile_result.stderr.decode('utf-8')}")
            
            self.run_path = f"engine_cpp_{self.id}"  
        
        # compile java using javac
        elif lang == "java":
            compile_cmd = ["javac", self.engine_path]
            compile_result = subprocess.run(compile_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            
            if compile_result.returncode != 0:
                raise RuntimeError(f"[Java] Engine {self.engine_name} failed to compile: {compile_result.stderr.decode('utf-8')}")
            
            self.run_path = self.run_path.replace(".java", "")
                  
        
    def run(self, args: List[str]) -> str | None:
        """
        Runs the engine with the given arguments and returns the output
        
        In most cases, the arguments should describe the current gamestate or the previous action to the engine,
        and the output should be the engine's response (its best move)
        
        The engine will be run using its language's interpreter/compiler, and we grab standard output
        Returns a string of the engine's response, or None if the engine errored/timed out
        
        Template files that contestants download will all have a runnable main function that takes in command line arguments
        """
        
        match self.lang:
            case "cpp":
                run_cmd = [self.run_path, *args]
            case "python3":
                run_cmd = ["python3", self.run_path, *args]
            case "java":
                run_cmd = ["java", self.run_path, *args]
            case "nodejs":
                run_cmd = ["node", self.run_path, *args]
            case "c#": #maybe
                run_cmd = ["dotnet", "run", self.run_path, *args]
            case _:
                raise RuntimeError(f"Language {self.lang} is not supported")
        
        run_result = subprocess.run(run_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        if run_result.returncode != 0:
            # this happens if runtime error
            raise RuntimeError(f"Engine {self.engine_name} failed to run: {run_result.stderr.decode('utf-8')}")

        return run_result.stdout.decode('utf-8')
        
        
        
        