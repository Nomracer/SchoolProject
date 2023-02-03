$(function () {
    $('input[name="dates"]').daterangepicker({
        opens: 'center'
    }, function (start, end, label) {
        var carPrice = document.getElementById('pricetag').textContent;
        console.log(carPrice)
        var days = new Date(end - start),
            totalDay = Math.floor(days / 1000 / 60 / 60 / 24);
        document.getElementById('daysRange').innerText = totalDay;
        if (carCount > 0) {

            var priceNotDiscount = totalDay * carPrice;
            document.getElementById('priceNotDiscount').innerText = priceNotDiscount;
            priceFinal = priceNotDiscount * 80 / 100;
        }
        else {
            priceFinal = totalDay * carPrice;
        }
        document.getElementById('priceFinal').innerText = priceFinal;
        console.log(totalDay);
    });
});
