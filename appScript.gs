function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([
    new Date(),
    e.parameter.fname,
    e.parameter.lname,
    e.parameter.email,
    e.parameter.phone,
    e.parameter.street + " " + e.parameter.city + " " + e.parameter.state + " " + e.parameter.zip,
    e.parameter.vmake,
    e.parameter.vmodel,
    e.parameter.vyear,
    e.parameter.clubAffiliation,
    e.parameter.transactionid
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "Success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
