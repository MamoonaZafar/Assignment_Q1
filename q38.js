function describe_city(city, country) {
    if (country === void 0) { country = 'USA'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('New York');
describe_city('Lahore', 'Pakistan');
describe_city('London', 'UK');
