let requestTitle = "";
let requestObject = "";
let requestParams = [];

const handleStart = () => {
    requestTitle = document.getElementById("request-title").value;
    requestObject = document.getElementById("request-object").value;
    const requestParamsPrev = document.getElementById("request-params").value.split(";");
    requestParams = [];
    for(let i = 0; i < requestParamsPrev.length - 1; i++){
        requestParams.push(requestParamsPrev[i].trim().split(" "));
    }
    console.log(requestTitle);
    console.log(requestParams);
    let declareVaribleText = "";
    let methodNhapText = "";
    let methodXuatText1 = "";
    let methodXuatText2 = "";
    let methodXuatText3 = "";
    for(let i = 0; i < requestParams.length; i++){
        let paramReadLineText = "";
        if(requestParams[i][0] === "int"){
            paramReadLineText = "int.Parse(Console.ReadLine())";
        } else if(requestParams[i][0] === "float"){
            paramReadLineText = "float.Parse(Console.ReadLine())";
        } else if(requestParams[i][0] === "long"){
            paramReadLineText = "long.Parse(Console.ReadLine())";
        } else if(requestParams[i][0] === "DateTime"){
            paramReadLineText = "DateTime.Parse(Console.ReadLine())";
        } else{
            paramReadLineText = "Console.ReadLine()";
        }

        declareVaribleText += `&emsp;&emsp;${requestParams[i][0]} ${requestParams[i][1]};</br>`;
        methodNhapText += `
            &emsp;&emsp;&emsp;Console.WriteLine("Nhap ${requestParams[i][1]}:");</br>
            &emsp;&emsp;&emsp;${requestParams[i][1]} = ${paramReadLineText};</br>
        `;
        methodXuatText1 +=`{${i},10}`;
        methodXuatText2 +=`"${requestParams[i][1]}",`;
        methodXuatText3 +=`${requestParams[i][1]},`;
    }
    methodXuatText2 = methodXuatText2.substring(0, methodXuatText2.length - 1);
    methodXuatText3 = methodXuatText3.substring(0, methodXuatText3.length - 1);


    const outputCodeElement = document.getElementById("output-code");
    let codeText = "";
    codeText += `
    <p>
        using System;</br>
        using System.Collections.Generic;</br>
        using System.Linq;</br>
        using System.Text;</br>
        </br>
        namespace ${requestTitle}</br>
        {</br>
        &emsp;class ${requestObject}</br>
        &emsp;{</br>
        ${declareVaribleText}
        </br>
        &emsp;&emsp;public void Nhap()</br>
        &emsp;&emsp;{</br>
                    ${methodNhapText}
        &emsp;&emsp;}</br>
                </br>
        &emsp;&emsp;public void Xuat()</br>
        &emsp;&emsp;{</br>
        &emsp; &emsp; &emsp;Console.WriteLine("${methodXuatText1}",</br>
        &emsp; &emsp; &emsp; &emsp;${methodXuatText2});</br>
        &emsp; &emsp; &emsp;Console.WriteLine("${methodXuatText1}",</br>
        &emsp; &emsp; &emsp; &emsp;${methodXuatText3});</br>
        &emsp;&emsp;}</br>
        &emsp;}</br>
        </br>
        &emsp;class DS${requestObject}</br>
        &emsp;{</br>
        &emsp;&emsp;${requestObject}[] DS;</br>
        &emsp;&emsp;int sophantu;</br>
        &emsp;&emsp;public void NhapDS()</br>
        &emsp;&emsp;{</br>
        &emsp;&emsp;&emsp;Console.WriteLine("Nhap so luong ${requestObject}:");</br>
        &emsp;&emsp;&emsp;sophantu = int.Parse(Console.ReadLine());</br>
        &emsp;&emsp;&emsp;DS = new ${requestObject}[sophantu];</br>
        &emsp;&emsp;&emsp;for (int i = 0; i < sophantu; i++)</br>
        &emsp;&emsp;&emsp;{</br>
        &emsp;&emsp;&emsp;&emsp;Console.WriteLine("Nhap DS${requestObject}[{0}]", i);</br>
        &emsp;&emsp;&emsp;&emsp;DS[i] = new ${requestObject}();</br>
        &emsp;&emsp;&emsp;&emsp;DS[i].Nhap();</br>
        &emsp;&emsp;&emsp;}</br>
        &emsp;&emsp;}</br>
        </br>
        &emsp;&emsp;public void XuatDS()</br>
        &emsp;&emsp;{</br>
        &emsp;&emsp;&emsp;for (int i = 0; i < sophantu; i++)</br>
        &emsp;&emsp;&emsp;{</br>
        &emsp;&emsp;&emsp;&emsp;DS[i].Xuat();</br>
        &emsp;&emsp;&emsp;}</br>
        &emsp;&emsp;}</br>
        &emsp;}</br>
        </br>
        &emsp;class Program</br>
        &emsp;{</br>
        &emsp;&emsp;static void Main(string[] args)</br>
        &emsp;&emsp;{</br>
        &emsp;&emsp;&emsp;DS${requestObject} DS = new DS${requestObject}();</br>
        &emsp;&emsp;&emsp;DS.NhapDS();</br>
        &emsp;&emsp;&emsp;DS.XuatDS();</br>
        &emsp;&emsp;&emsp;Console.ReadKey();</br>
        &emsp;&emsp;}</br>
        &emsp;}</br>
        }</br>
    </p>
    `;

    outputCodeElement.innerHTML = codeText;
}

const handleRun = () => {
    const objects = [];
    let sophantu = 0;
    sophantu = prompt(`"Nhap so luong ${requestObject}:"`);
    for(let i = 0; i < sophantu; i++){
        objects.push([]);
        alert(
            `Nhap DS${requestObject}[${i}]\n
        `);
        for(let j = 0; j < requestParams.length; j++){
            objects[i].push(prompt(`Nhap ${requestParams[j][1]}:`));
        }
    }

    let outputText = "<p>";
    for(let j = 0; j < requestParams.length; j++){
        outputText += `&emsp;&emsp;&emsp;&emsp;&emsp;${requestParams[j][1]}`;
    }
    outputText += "</br>"
    for(let i = 0; i < sophantu; i++){
        for(let j = 0; j < requestParams.length; j++){
            outputText += `&emsp;&emsp;&emsp;&emsp;&emsp;${objects[i][j]}`;
        }
        outputText += "</br>"
    }
    outputText += "</p>"

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = outputText;
    outputElement.style.display = "block";
}

const handleConsole = () => {
    const output = document.getElementById("output");
    if (output.style.display === "block"){
        output.style.display = "none";
    } else{
        output.style.display = "block";
    }
}