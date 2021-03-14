const driver = {
    name: 'Leah',
    streetAddress: '123 Magic Rd'  };

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = { ...driver };

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    const newObj = Object.assign(driver,{[key]: value});

    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    
    delete driver[key];

    return driver;
}   

function deleteFromDriverByKey(driver, key) {
    const newObj = { ...driver };

    delete newObj[key]

    return newObj
}   