
function calculate()
{
    var numberField = document.getElementById('input-number')
    var resultField = document.getElementById('result')
    var number = numberField.value
    resultField.innerText = ''
    for(var i = 0; i <= 10; i++)
    {
        resultField.innerText += number + ' x ' + i + ' = ' + number * i + "\n"
    }
}