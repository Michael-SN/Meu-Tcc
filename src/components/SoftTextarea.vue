<template>
  <div class="form-group">
    <label :for="id" class="text-sm">
      <slot />
    </label>
    <textarea
      :id="id"
      class="form-control"
      rows="5"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "SoftTextarea",
  props: {
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Your text here...",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
