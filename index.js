let id = "no";
function getData() {
    document.getElementById('msg').innerText = '';
    let data = document.getElementById('mName').value;
    //console.log(data)
    if (data == 'no') {
        document.getElementById('msg').innerText = `***Please enter the name of movie***`
    }
    else {
        if (id == 'no')//id is declared on the 1st line and this is for first time adding value in the localstorage
        {
            let arr = JSON.parse(localStorage.getItem('crud'))

            if (arr == null)//this is for the first time to add one value. 
            {
                let data1 = [mName.value];
                localStorage.setItem('crud', JSON.stringify(data1))
            }
            else//after first value the rest values will be stored by this scope.
            {
                arr.push(mName.value);
                localStorage.setItem('crud', JSON.stringify(arr))

            }
        }
        else
        {   
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id] = mName.value;
            localStorage.setItem('crud', JSON.stringify(arr))
            document.getElementById('msg').innerText = `Data Updated !!` 
        }
        document.getElementById('mName').value = '';
    }
    document.getElementById('mName').value = ''; //will give blank value after submit any name value.
    showData();
}

function showData() {
    let arr = JSON.parse(localStorage.getItem('crud'))
    if (arr != null) {
        let html = '';
        let list = 1;
        for (let key in arr) {
            html = html + `<tr>
            <td>${list++}</td>
            <td>${arr[key]}</td>
            <td> <a href = "javascript:void(0)" onclick="editData(${key})">Edit</a> </td>
            <td> <a href = "javascript:void(0)" onclick="deletData(${key})">Delet</a> </td>
            </tr>`
        }
        document.getElementById('root').innerHTML = html;
    }
}

function editData(did) {
    id = did;
    let arr = JSON.parse(localStorage.getItem('crud'));
    document.getElementById('mName').value = arr[did]
}

function deletData(did) {
    let arr = JSON.parse(localStorage.getItem('crud'));
    arr.splice(did, 1);
    localStorage.setItem('crud', JSON.stringify(arr));
    showData();
}