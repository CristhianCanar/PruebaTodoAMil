"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const persons_json_1 = __importDefault(require("./persons.json"));
const persons = persons_json_1.default;
const getEntries = () => persons;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInfo = () => {
    return persons.map(({ NonSensitiveInfoPersonEntry }) => {
        return {
            1: 
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const findById = (id) => {
    const entry = persons.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
