'use strict';

const http = require("http");
const fetch = require("node-fetch");
const url = "http://localhost:3002";

const argv = require('yargs')
    .usage('Usage: $0 -n [num] [-a] [-p]')
    .example('$0 -n 11 -a', 'Запускает 11 паралленых запросов.')
    .describe('n', 'Количество запросов.')
    .describe('a', 'Запуск параллельно')
    .describe('p', 'Запуск последовательно')
    .help('h')
    .alias('h', 'help')
    .default('n', 10)
    .default('a', true)
    .boolean(['a', 'p'])
    .argv;

if (argv.p) {
    argv.a = false;
    console.log("Do consistent jobs");
    let i = 1;
    const gourl = url => http.get(url, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            console.log(body);
            if(i < argv.n) {
                gourl(url);
                i++;
            }
        });
    });
    gourl(url);
} else if (argv.a) {
    console.log("Do parrallel jobs");
    for(let i = 0; i < argv.n; i++) {
        http.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                console.log(body);
            });
        });
    }
}
