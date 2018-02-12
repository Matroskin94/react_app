const findAddress = (array, searchWord, strict) => {
    const ressArray = array.filter(element => {
        if (!strict) {
            let foundPos = -1;

            foundPos = element.address.indexOf(searchWord, 0);
            if (foundPos >= 0) {
                return true;
            }
        } else if (element.address === searchWord) {
            return true;
        }
    });

    return ressArray;
};

export default findAddress;
