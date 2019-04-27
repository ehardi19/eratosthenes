var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Brute = (function () {
    function Brute(n) {
        this.upperBound = n;
    }
    Brute.prototype.isPrime = function (n) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (n <= 1)
                            return [2, false];
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!(i < n)) return [3, 4];
                        if (n % i == 0)
                            return [2, false];
                        return [4, sleep(delayTime)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, true];
                }
            });
        });
    };
    Brute.prototype.calculate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!(i <= this.upperBound)) return [3, 4];
                        return [4, this.isPrime(i)];
                    case 2:
                        if (_a.sent())
                            console.log(i);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    return Brute;
}());
function sleep(miliseconds) {
    return new Promise(function (resolve, reject) {
        return setTimeout(resolve, miliseconds);
    });
}
var delayTime = 500;
var canvas = function (p) {
    p.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var era, bru;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p.createP("hello");
                        p.createP("world");
                        era = new Sieve(100);
                        return [4, era.calculate()];
                    case 1:
                        _a.sent();
                        bru = new Brute(100);
                        return [4, bru.calculate()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    p.draw = function () {
    };
};
new p5(canvas);
var Sieve = (function () {
    function Sieve(n) {
        this.upperBound = n;
    }
    Sieve.prototype.calculate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, i, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.prime = new Array(this.upperBound + 1);
                        for (i = 0; i <= this.upperBound; i++) {
                            this.prime[i] = true;
                        }
                        i = 2;
                        _a.label = 1;
                    case 1:
                        if (!((i * i) <= this.upperBound)) return [3, 7];
                        if (!(this.prime[i] == true)) return [3, 5];
                        j = (i * i);
                        _a.label = 2;
                    case 2:
                        if (!(j <= this.upperBound)) return [3, 5];
                        this.prime[j] = false;
                        return [4, sleep(delayTime)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        j += i;
                        return [3, 2];
                    case 5:
                        console.log(i * i);
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3, 1];
                    case 7: return [2];
                }
            });
        });
    };
    return Sieve;
}());
//# sourceMappingURL=build.js.map