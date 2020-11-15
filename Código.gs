/**
 * A simple webapp to test google.script.run concurrency
 * Pablo Felip
 * @pfelipm
 */

function doGet() {
  
  return HtmlService.createHtmlOutputFromFile('client');
  
}

function serverTask(time){

  Utilities.sleep(time);

}