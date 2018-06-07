import collections

class Controller(object):
    """Object for communicating between programs"""
    def __init__(self,name):
        assert type(name) is str
        self.filename = name
        self.settings = collections.defaultdict(int)

    def read(self):
        with open(self.filename,"r") as f:
            s = f.readline().strip()
            while(s != ""):
                li = s.split('=')
                self.settings[li[0]] = int(li[1])
                s = f.readline().strip()

    def write(self):
        with open(self.filename, "w") as f:
            for k,v in self.settings.items():
                s = k + '=' + str(v) + '\n'
                f.write(s)


    def dump(self):
            for k,v in self.settings.items():
                s = k + '=' + str(v)
                print(s)


if __name__=="__main__":
    c=Controller("SETTINGS.txt")
    c.read()
    c.dump()
