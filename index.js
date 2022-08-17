let id = "no";

function getData() {
    document.getElementById('msg').innerText = '';
    let data = document.getElementById('mName').value;
    let dataR =  document.getElementById('Ratings').value;
    //console.log(data)
    if ((data&&dataR) == '') {
        document.getElementById('msg').innerText = `*** 🅿🅻🅴🅰🆂🅴  🅴🅽🆃🅴🆁  🅼🅾🆅🅸🅴  🅽🅰🅼🅴 🅰🅽🅳
        🆁🅰🆃🅸🅽🅶🆂***`
    }
    else {
        if (id == 'no')//id is declared on the 1st line and this is for first time adding value in the localstorage
        {
            let arr = JSON.parse(localStorage.getItem('crud'))
            let arr1 = JSON.parse(localStorage.getItem('crud1'))
            if ((arr&&arr1) == null) //this is for the first time to add one value. 
            {
                let data1 = [mName.value]
                localStorage.setItem('crud', JSON.stringify(data1))
                let data2 = [Ratings.value]
                localStorage.setItem('crud1', JSON.stringify(data2))
            }
            else //after first value the rest values will be stored by this scope.
            {
                arr.push(mName.value);
                localStorage.setItem('crud', JSON.stringify(arr))
                arr1.push(Ratings.value);
                localStorage.setItem('crud1', JSON.stringify(arr1))
            }
        }
        else
        {   
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = mName.value;
            localStorage.setItem('crud', JSON.stringify(arr));
            document.getElementById('msg').innerText = `🅳🅰🆃🅰  🆄🅿🅳🅰🆃🅴🅳  !!`

            let arr1 = JSON.parse(localStorage.getItem('crud1'));
            arr1[id] = Ratings.value;
            localStorage.setItem('crud1', JSON.stringify(arr1));
            document.getElementById('msg').innerText = `🅳🅰🆃🅰  🆄🅿🅳🅰🆃🅴🅳  !!`

            id = 'no';
            //console.log(id)
        }
    }
    document.getElementById('mName').value = ''; //will give blank value after submit any name value.
    document.getElementById('Ratings').value = '';
    showData();
}

function showData() {
    let arr = JSON.parse(localStorage.getItem('crud'))
    let arr1 = JSON.parse(localStorage.getItem('crud1'))
    if ((arr&&arr1) != null) {
        let html = '';
        let list = 1;

        for (let key in arr) {
            html = html + `<tr>
            <td>${list++}</td>
            <td>${arr[key]}</td>
            <td>${arr1[key]}/10</td>
            <td> <a href = "javascript:void(0)" onclick="editData(${key})">Edit</a> </td>
            <td> <a href = "javascript:void(0)" onclick="deletData(${key})">Delete</a> </td>
            </tr>`
        }
        document.getElementById('root').innerHTML = html;
    }
}

function editData(did) {
    id = did;
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('mName').value = arr[did]

    let arr1 = JSON.parse(localStorage.getItem('crud1'));
    document.getElementById('Ratings').value = arr1[did]
}

function deletData(did) {
    let arr = JSON.parse(localStorage.getItem('crud'));
    arr.splice(did, 1);
    localStorage.setItem('crud', JSON.stringify(arr));

    let arr1 = JSON.parse(localStorage.getItem('crud1'));
    arr1.splice(did, 1);
    localStorage.setItem('crud1', JSON.stringify(arr1));

    showData();
}