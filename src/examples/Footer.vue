<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="text-sm text-center copyright text-muted">
        &copy; {{ new Date().getFullYear()
        }}<span class="font-weight-bold"> SN Team Software Developer</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
