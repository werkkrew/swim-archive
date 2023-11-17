/* ----------------------------------------------------------------------------
Custom 11ty filters
---------------------------------------------------------------------------- */

const lodash = require('lodash');
const dayjs = require('dayjs');
const fs = require("node:fs"); 

// Add UTC support for DayJS 
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc)

/** Returns all entries from the given array that match the specified key:value pair. */
const where = (arrayOfObjects, keyPath, value) =>
  arrayOfObjects.filter(object => lodash.get(object, keyPath) === value);

const count = (arr, key) => lodash.countBy(arr, key);
const first = (obj) => Object.keys(obj)[0];
const fileExists = (file) => fs.existsSync(file);

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
const formatDate = (date, format) => dayjs(date).format(format);
const formatDateUTC = (date, format) => dayjs.utc(date).format(format);

module.exports = {
  where,
  count,
  first,
  fileExists,
  formatDate,
  formatDateUTC
};