/*
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}
*/
async function getProcessedData(url) {
  const response = await downloadData(url).catch(downloadFallbackData(url));
  const procesar = await processDataInWorker(response).catch(console.error);
  const devolver = await procesar.json().catch(console.error);

  return devolver;
}
