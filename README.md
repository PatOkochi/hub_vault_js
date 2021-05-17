## How to use HubVaults JavaScript code

The JavaScript code used to make a request to HubVault on staging environment is hosted on GitHub https://github.com/PatOkochi/hub_vault_js and called using
cdn jsdelivr adding the code below to the head of your HTML.

Example:

  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/PatOkochi/hub_vault_js/js/hub_vault.js"></script>

The JavaScript code has a function getCreditCardToken(public_key, card_number, month, year) that sends the request to the Vault with a public key and credit card data.

HTML Example:

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/PatOkochi/hub_vault_js/js/hub_vault.js"></script>
    </head>
<body>
    <div class="container">
 
        <!-- main -->
            <div class="col-md-9">
                <!-- apply custom style -->
                <div class="page-header" style="margin-top:-30px;padding-bottom:0px;">
                <h1><small>情報送信</small></h1>
         
                <form method="post" action="" class="form-horizontal">
                    <table border="0">
                        <tr>
                          <td align="right"><b> Credit Card number：</b></td>
                          <td><input type="text" id="credit_card_number" size="30" maxlength="16"></td>
                        </tr>
                        <tr>
                          <td align="right"><b> Expiration Month：</b></td>
                          <td><input type="text" id="exp_month" size="6" maxlength="2"></td>
                        </tr>
                        <tr>
                            <td align="right"><b> Expiration Year:</b></td>
                            <td><input type="text" id="exp_year" size="6" maxlength="2"></td>
                        <tr>
                    <!-- submit -->
                     <div class="form-group">
                        <div class="col-md-offset-3">
                            <input type="button" value="Submit" class="btn btn-primary" onClick="sendCreditCardInfo()">
                        </div>
                    </div>
                     
                    <!-- input result  -->
                    <div class="form-group">
                        <label class="col-md-2 control-label">入力結果</label>
                        <div class="col-md-5">
                            <textarea class="form-control" name="vaultResponse" rows=10 ></textarea>
                        </div>
                   </div>
                </form>
                </div>
            </div>
        </div>
        <script type="text/javascript" >
            var public_key = 'public_key';

            function sendCreditCardInfo(){
                let number = document.getElementById("credit_card_number").value;
                let exp_month = document.getElementById("exp_month").value;
                let exp_year = document.getElementById("exp_year").value;

                let data = getCreditCardToken(public_key, number, exp_month, exp_year);

                data.then(result => {
                    document.getElementById("vaultResponse").value = result;
                    togglePopup();
                    return result;
                });
            }

            function togglePopup(){
                document.getElementById("popup-1").classList.toggle("active");
            }
        </script>
</body>
</html>