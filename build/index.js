"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = __importDefault(require("./Sorter"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const numberCollection = new NumbersCollection_1.default([10000, 3, -5, 0]);
const sorter = new Sorter_1.default(numberCollection);
sorter.sort();
