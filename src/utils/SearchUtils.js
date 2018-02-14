const filterAddreses = (array, searchWord, strict) => {
    const ressArray = array.filter(element => {
        const isMatch = (!strict && element.address.indexOf(searchWord, 0) >= 0)
            || (element.address === searchWord);

        return isMatch;
    });

    return ressArray;
};

export default filterAddreses;
