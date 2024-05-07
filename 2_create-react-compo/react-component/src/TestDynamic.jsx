function ForDynamic () {
    let myName = 'pawan';
    let fullName = () => {
        return 'Pawan Shekhawat';
    }

    return <h1>
        h1 Used for checking dynamic. 
        my name is {fullName()}
    </h1>
}

export default ForDynamic;