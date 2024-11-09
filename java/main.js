window.addEventListener("load", () => {
  Swal.fire({
    title: "Chỉnh đủ âm lượng để nghe",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "OK",
    cancelButtonText: "Canner",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
    } else {
      document.querySelector(".song").play();
    }
  });
});
