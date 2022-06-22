let aantalAppels = 0;

function koopProduct(fruit, prijs)
{
    if (fruit == "appel")
    {
        aantalAppels++;
        let prijsAppels = aantalAppels * 3.50;
        document.getElementById("totaal_appel").value = aantalAppels;
        document.getElementById("totaalPrijs_appel").value = prijsAppels;
    }
}

function verwijderProduct(fruit, prijs)
{
        if (fruit == "appel")
    {
        aantalAppels--;
        if (aantalAppels < 0)
        {
            aantalAppels = 0;
        }
        let prijsAppels = aantalAppels;
        document.getElementById("totaal_appel").value = aantalAppels;
        document.getElementById("totaalPrijs_appel").value = prijsAppels;
    }
}

function berekenPrijs()
{
    let totaalPrijs = aantalAppels * 3.50;
    document.getElementById("totaalPrijs").value = totaalPrijs;
}