async function generate() {
  const text = document.getElementById("input").value;
  const output = document.getElementById("output");
  const loading = document.getElementById("loading");

  loading.innerText = "Loading...";
  output.innerText = "";

  try {
    const res = await fetch("https://your-backend-url.onrender.com/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    output.innerText = data.output;

  } catch (err) {
    output.innerText = "Error occurred";
  }

  loading.innerText = "";
}