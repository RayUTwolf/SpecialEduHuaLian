<template>
  <div class="SideBar">
    <p class="Title">功能區</p>
    <div class="Buttons">
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        @click="previousQuestion()"
        v-if="GameStatus == 'Progressing'"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </div>
          <div class="mx-auto">上一關</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        @click="nextQuestion()"
        v-if="GameStatus == 'Progressing'"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </div>
          <div class="mx-auto">下一關</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        @click="startGame()"
        v-if="GameStatus == 'NotStart'"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-skip-start-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z"
              />
            </svg>
          </div>
          <div class="mx-auto">開始</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        @click="reloadPage()"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path
                d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"
              />
            </svg>
          </div>
          <div class="mx-auto">重新開始</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        @click="toCSV()"
        v-if="GameStatus == 'Done'"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
              <path
                d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
              />
            </svg>
          </div>
          <div class="mx-auto">下載</div>
        </div>
      </button>
      <!-- <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-patch-question-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627"
              />
            </svg>
          </div>
          <div class="mx-auto">教學</div>
        </div>
      </button> -->
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        data-bs-toggle="modal"
        data-bs-target="#Calculator"
        @click="scratchSheet()"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-calculator"
              viewBox="0 0 16 16"
            >
              <path
                d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
              />
              <path
                d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div class="mx-auto">計算紙</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        v-if="GameStatus == 'NotStart'"
        data-bs-toggle="modal"
        data-bs-target="#reappear"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
              />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
              />
            </svg>
          </div>
          <div class="mx-auto">重現代碼</div>
        </div>
      </button>
      <button
        class="btn btn-primary text-nowrap img-hover-zoom"
        v-if="GameStatus == 'Done'"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-copy"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
              />
            </svg>
          </div>
          <div class="mx-auto" @click="copyReappearCode">複製重現代碼</div>
        </div>
      </button>
      <slot name="hint"></slot>
    </div>

    <!-- 重現代碼 -->
    <div
      class="modal fade"
      id="reappear"
      tabindex="-1"
      aria-labelledby="reappearLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="reappearLabel">重現代碼</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>請將csv檔中的重現代碼貼到此處</p>
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="重現代碼"
                aria-label="number"
                aria-describedby="addon-wrapping"
                v-model="code"
              />
            </div>
            <p v-if="!checkformat" style="color: red">
              請貼上正確的重現代碼，若確認代碼沒有錯卻無法送出，可能是遊戲已更新，代碼會自動失效
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="reappearCode"
              data-bs-dismiss="modal"
              :disabled="!checkformat"
            >
              套用代碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { usegameStore } from "@/store/game";

export default {
  name: "SideBar",
  props: {
    GameStatus: {
      type: String,
      default: "NotStart",
    },
    HintInfo: {
      type: Object,
      default: () => {},
    },
    Hint: {
      type: Object,
      default: () => {},
    },
    download_data: {
      type: Array,
      default: () => [],
    },
    levelAmount: {
      type: Number,
      default: 0,
    },
    reAppeareCode: {
      type: String,
      default: "",
    },
  },
  computed: {
    gameStore() {
      return usegameStore();
    },
    checkformat() {
      if (this.code == "origin") return true;
      if (this.code.split("-").length == this.levelAmount) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {},
  data() {
    return {
      CalculatorSwitch: false,
      code: "",
    };
  },
  methods: {
    previousQuestion() {
      this.$emit("previous-question");
    },
    nextQuestion() {
      this.$emit("next-question");
    },
    startGame() {
      this.$emit("start-game");
    },
    reloadPage() {
      location.reload();
    },
    toCSV(data) {
      this.$emit("to-csv", data);
    },
    provideHint() {
      this.$emit("provide-hint");
    },
    scratchSheet() {
      this.$emit("scratch-sheet");
    },
    reappearCode() {
      this.$emit("reappear-code", this.code);
    },
    copyReappearCode() {
      navigator.clipboard
        .writeText(this.reAppeareCode)
        .then(function () {
          alert("文字已成功複製");
        })
        .catch(function (err) {
          alert("無法複製文字", err);
        });
    },
  },
};
</script>
<style scoped>
.SideBar {
  border-left: solid 3px #aaa;
  background-color: #ffedda;
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 1rem;
  .Buttons {
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: stretch;
    button {
      align-self: center;
      width: 93%;
      font-size: 1.2rem;
      border-radius: 12px;
      height: 4rem;
      padding: 0.4rem;
    }
  }
  .Title {
    font-size: 2rem;
    text-align: start;
  }
  svg {
    width: 2vw;
    height: 2vw;
  }
}
</style>
