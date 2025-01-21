const useState = (initialValue) =>{
    let state = initialValue;
    const setState = (newValue) =>{
        state = newValue;
    }
    return [() => state , setState];
}

