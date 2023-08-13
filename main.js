
function usersMass(Arrays){
    let x =0;
    let k = 0;    
        for (let i = 1; i < 101; i++) {
            k = 0;
           if(i < 2){
            Arrays.push(Math.floor(Math.random() * 100))
           }else{
            while (k <= i) {
                x = Math.floor(Math.random() * 100);
                for (let j = 0; j < i; j++) {
                  if (Arrays[j] !== x) {
                    k++;
                  }
                }
                
                if (k == i) {
                 
                    Arrays.push(x);
                    break;
                }else{
                    k = 0;
                }
                }
           }
          }
          return Arrays;
}

function userFive(k , Arrays){
    let k1 = k;
    console.log( Arrays);

    for (let i = 0; i < 50; i++) {
        if(k == Arrays[k1]){
            topaoldi ++ ;
            break;
        }

        k1 = Arrays[k1];

        if(i>=49){
            topaolmadi ++;
        }
        Write(i,k,Arrays[k1],k1)
    }
}

var topaoldi = 0;
var topaolmadi = 0;

function asd(){
    let marta = document.getElementById('input').value;
    let s = 0;
    if(marta == 0){
        alert('0 dan katta bolgan raqam kirgizing !!!');
    }else{
        for (let i = 0; i < marta; i++) {
            Write(`${i+1} - marta ishladi`);
            const Arrays = [];
            usersMass(Arrays);
            topaoldi = 0;
            topaolmadi = 0;
            
            
            
            for (let i = 0; i < 100; i++) {
                userFive(i, Arrays);
                if(topaolmadi >= 1){
                    break;
                }
            }
        
            if(topaoldi == 100){
                s++;
            }
        }
        if(s == 0){
            document.getElementById('demo').innerHTML = marta + ' ta random massive kirgizilganda masala yechimi topilmadi ';
        }else{
            document.getElementById('demo').innerHTML = marta + ' ta random massive kirgizilganda '+ s + ' marta masala yechimini topdi ';
        }
        document.getElementById('demo1').innerHTML = 'Natija:   ' + '   ' +s/(marta/100)+' %';
        document.getElementById('demo2').innerHTML = 'Saytni refresh qilib yuboring';
    }
    document.getElementById('input').value = ' ';
}

function Write(a,b,s,d){
    let table = document.getElementById('table');
    let tr = document.createElement('tr');
    tr.setAttribute('tr','heading');
    if(b == undefined ||s == undefined ||d == undefined){
        tr.style.backgroundColor = 'green';
        tr.style.color = 'white';
        tr.innerHTML = `<td>${a}</td><td></td><td></td><td></td>`;
    }else{
        tr.innerHTML = `<td>${a}</td><td>${b}</td><td>${s}</td><td>${d}</td>`;
    }
    table.appendChild(tr)
}