function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const table = document.querySelector("table");
  const tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    const tdWinner = tr[i].getElementsByTagName("td")[0];
    const tdRunner = tr[i].getElementsByTagName("td")[1];

    if (tdWinner && tdRunner) {
      const txtValue = (
        tdWinner.textContent +
        " " +
        tdRunner.textContent
      ).toUpperCase();

      tr[i].style.display = txtValue.includes(filter) ? "" : "none";
    }
  }
}
