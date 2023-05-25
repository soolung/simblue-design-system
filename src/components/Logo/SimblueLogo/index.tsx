import React from "react";
import { LogoSizeType, getSizeFromName, logoSize } from "../../../theme/size";

export const SimblueLogo = ({ size = "DEFAULT" }: { size: LogoSizeType }) => {
  return (
    <svg
      width={getSizeFromName(logoSize, size)}
      viewBox="0 0 97 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <mask
        id="path-1-outside-1_1318_454"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="58"
        height="32"
        fill="black">
        <rect fill="white" width="58" height="32" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.9423 17.1736H33.0056L40.094 6.15824L47.1824 17.1736H49.2457L42.0907 6.0584H49.4121V4.32789H41.0924V1H39.0956V4.32789H30.7759V6.0584H38.064L30.9423 17.1736ZM54.7367 17.7726H56.7335V2.33116H54.7367V8.88711H47.8147V10.6176H54.7367V17.7726ZM30.9423 25.1272C30.9423 28.8545 33.2385 30.4852 37.0989 30.4852H51.0761C54.9364 30.4852 57.2327 28.8545 57.2327 25.1272C57.2327 21.4 54.9364 19.7693 51.0761 19.7693H37.0989C33.2385 19.7693 30.9423 21.4 30.9423 25.1272ZM32.939 25.1272C32.939 22.6979 34.1371 21.4998 37.0989 21.4998H51.0761C54.0379 21.4998 55.2359 22.6979 55.2359 25.1272C55.2359 27.5566 54.0379 28.7546 51.0761 28.7546H37.0989C34.1371 28.7546 32.939 27.5566 32.939 25.1272ZM12.6493 2.33116H9.98695L2 16.508H4.0633L11.3181 3.62904L18.5729 16.508H20.6362L12.6493 2.33116ZM25.7945 17.107H27.7912V2.33116H25.7945V17.107ZM2.49918 30.4852H27.7912V19.1038H2.49918V30.4852ZM4.49592 28.7546V20.8343H25.7945V28.7546H4.49592Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.9423 17.1736H33.0056L40.094 6.15824L47.1824 17.1736H49.2457L42.0907 6.0584H49.4121V4.32789H41.0924V1H39.0956V4.32789H30.7759V6.0584H38.064L30.9423 17.1736ZM54.7367 17.7726H56.7335V2.33116H54.7367V8.88711H47.8147V10.6176H54.7367V17.7726ZM30.9423 25.1272C30.9423 28.8545 33.2385 30.4852 37.0989 30.4852H51.0761C54.9364 30.4852 57.2327 28.8545 57.2327 25.1272C57.2327 21.4 54.9364 19.7693 51.0761 19.7693H37.0989C33.2385 19.7693 30.9423 21.4 30.9423 25.1272ZM32.939 25.1272C32.939 22.6979 34.1371 21.4998 37.0989 21.4998H51.0761C54.0379 21.4998 55.2359 22.6979 55.2359 25.1272C55.2359 27.5566 54.0379 28.7546 51.0761 28.7546H37.0989C34.1371 28.7546 32.939 27.5566 32.939 25.1272ZM12.6493 2.33116H9.98695L2 16.508H4.0633L11.3181 3.62904L18.5729 16.508H20.6362L12.6493 2.33116ZM25.7945 17.107H27.7912V2.33116H25.7945V17.107ZM2.49918 30.4852H27.7912V19.1038H2.49918V30.4852ZM4.49592 28.7546V20.8343H25.7945V28.7546H4.49592Z"
        fill="black"
      />
      <path
        d="M33.0056 17.1736V17.8736H33.3875L33.5942 17.5524L33.0056 17.1736ZM30.9423 17.1736L30.3529 16.7959L29.6624 17.8736H30.9423V17.1736ZM40.094 6.15824L40.6827 5.77944L40.094 4.86468L39.5054 5.77944L40.094 6.15824ZM47.1824 17.1736L46.5938 17.5524L46.8005 17.8736H47.1824V17.1736ZM49.2457 17.1736V17.8736H50.5288L49.8343 16.7947L49.2457 17.1736ZM42.0907 6.0584V5.3584H40.8076L41.5021 6.43729L42.0907 6.0584ZM49.4121 6.0584V6.7584H50.1121V6.0584H49.4121ZM49.4121 4.32789H50.1121V3.62789H49.4121V4.32789ZM41.0924 4.32789H40.3924V5.02789H41.0924V4.32789ZM41.0924 1H41.7924V0.3H41.0924V1ZM39.0956 1V0.3H38.3956V1H39.0956ZM39.0956 4.32789V5.02789H39.7956V4.32789H39.0956ZM30.7759 4.32789V3.62789H30.0759V4.32789H30.7759ZM30.7759 6.0584H30.0759V6.7584H30.7759V6.0584ZM38.064 6.0584L38.6534 6.43604L39.3438 5.3584H38.064V6.0584ZM56.7335 17.7726V18.4726H57.4335V17.7726H56.7335ZM54.7367 17.7726H54.0367V18.4726H54.7367V17.7726ZM56.7335 2.33116H57.4335V1.63116H56.7335V2.33116ZM54.7367 2.33116V1.63116H54.0367V2.33116H54.7367ZM54.7367 8.88711V9.58711H55.4367V8.88711H54.7367ZM47.8147 8.88711V8.18711H47.1147V8.88711H47.8147ZM47.8147 10.6176H47.1147V11.3176H47.8147V10.6176ZM54.7367 10.6176H55.4367V9.91762H54.7367V10.6176ZM9.98695 2.33116V1.63116H9.57787L9.37708 1.98757L9.98695 2.33116ZM12.6493 2.33116L13.2591 1.98757L13.0583 1.63116H12.6493V2.33116ZM2 16.508L1.39013 16.1644L0.802188 17.208H2V16.508ZM4.0633 16.508V17.208H4.4724L4.67319 16.8516L4.0633 16.508ZM11.3181 3.62904L11.928 3.28548L11.3181 2.20278L10.7082 3.28548L11.3181 3.62904ZM18.5729 16.508L17.963 16.8516L18.1638 17.208H18.5729V16.508ZM20.6362 16.508V17.208H21.834L21.2461 16.1644L20.6362 16.508ZM27.7912 17.107V17.807H28.4912V17.107H27.7912ZM25.7945 17.107H25.0944V17.807H25.7945V17.107ZM27.7912 2.33116H28.4912V1.63116H27.7912V2.33116ZM25.7945 2.33116V1.63116H25.0944V2.33116H25.7945ZM27.7912 30.4852V31.1852H28.4912V30.4852H27.7912ZM2.49918 30.4852H1.79918V31.1852H2.49918V30.4852ZM27.7912 19.1038H28.4912V18.4038H27.7912V19.1038ZM2.49918 19.1038V18.4038H1.79918V19.1038H2.49918ZM4.49592 20.8343V20.1343H3.79592V20.8343H4.49592ZM4.49592 28.7546H3.79592V29.4546H4.49592V28.7546ZM25.7945 20.8343H26.4945V20.1343H25.7945V20.8343ZM25.7945 28.7546V29.4546H26.4945V28.7546H25.7945ZM33.0056 16.4736H30.9423V17.8736H33.0056V16.4736ZM39.5054 5.77944L32.4169 16.7948L33.5942 17.5524L40.6827 6.53704L39.5054 5.77944ZM47.7711 16.7948L40.6827 5.77944L39.5054 6.53704L46.5938 17.5524L47.7711 16.7948ZM49.2457 16.4736H47.1824V17.8736H49.2457V16.4736ZM41.5021 6.43729L48.6571 17.5525L49.8343 16.7947L42.6793 5.67952L41.5021 6.43729ZM49.4121 5.3584H42.0907V6.7584H49.4121V5.3584ZM48.7121 4.32789V6.0584H50.1121V4.32789H48.7121ZM41.0924 5.02789H49.4121V3.62789H41.0924V5.02789ZM40.3924 1V4.32789H41.7924V1H40.3924ZM39.0956 1.7H41.0924V0.3H39.0956V1.7ZM39.7956 4.32789V1H38.3956V4.32789H39.7956ZM30.7759 5.02789H39.0956V3.62789H30.7759V5.02789ZM31.4759 6.0584V4.32789H30.0759V6.0584H31.4759ZM38.064 5.3584H30.7759V6.7584H38.064V5.3584ZM31.5317 17.5512L38.6534 6.43604L37.4746 5.68076L30.3529 16.7959L31.5317 17.5512ZM56.7335 17.0726H54.7367V18.4726H56.7335V17.0726ZM56.0335 2.33116V17.7726H57.4335V2.33116H56.0335ZM54.7367 3.03116H56.7335V1.63116H54.7367V3.03116ZM55.4367 8.88711V2.33116H54.0367V8.88711H55.4367ZM47.8147 9.58711H54.7367V8.18711H47.8147V9.58711ZM48.5147 10.6176V8.88711H47.1147V10.6176H48.5147ZM54.7367 9.91762H47.8147V11.3176H54.7367V9.91762ZM55.4367 17.7726V10.6176H54.0367V17.7726H55.4367ZM37.0989 29.7852C35.2508 29.7852 33.8995 29.3924 33.019 28.6644C32.1632 27.9569 31.6423 26.8403 31.6423 25.1272H30.2423C30.2423 27.1414 30.8695 28.7038 32.1269 29.7434C33.3596 30.7626 35.0866 31.1852 37.0989 31.1852V29.7852ZM51.0761 29.7852H37.0989V31.1852H51.0761V29.7852ZM56.5327 25.1272C56.5327 26.8403 56.0117 27.9569 55.156 28.6644C54.2754 29.3924 52.9241 29.7852 51.0761 29.7852V31.1852C53.0884 31.1852 54.8153 30.7626 56.048 29.7434C57.3055 28.7038 57.9327 27.1414 57.9327 25.1272H56.5327ZM51.0761 20.4693C52.9241 20.4693 54.2754 20.8621 55.156 21.5901C56.0117 22.2976 56.5327 23.4141 56.5327 25.1272H57.9327C57.9327 23.1131 57.3055 21.5507 56.048 20.5111C54.8153 19.4919 53.0884 19.0693 51.0761 19.0693V20.4693ZM37.0989 20.4693H51.0761V19.0693H37.0989V20.4693ZM31.6423 25.1272C31.6423 23.4141 32.1632 22.2976 33.019 21.5901C33.8995 20.8621 35.2508 20.4693 37.0989 20.4693V19.0693C35.0866 19.0693 33.3596 19.4919 32.1269 20.5111C30.8695 21.5507 30.2423 23.1131 30.2423 25.1272H31.6423ZM37.0989 20.7998C35.545 20.7998 34.2969 21.1105 33.4398 21.8824C32.5658 22.6695 32.239 23.8064 32.239 25.1272H33.639C33.639 24.0187 33.9113 23.3419 34.3767 22.9227C34.8591 22.4882 35.691 22.1998 37.0989 22.1998V20.7998ZM51.0761 20.7998H37.0989V22.1998H51.0761V20.7998ZM55.9359 25.1272C55.9359 23.8064 55.6091 22.6695 54.7351 21.8824C53.8781 21.1105 52.6299 20.7998 51.0761 20.7998V22.1998C52.484 22.1998 53.3158 22.4882 53.7982 22.9227C54.2637 23.3419 54.5359 24.0187 54.5359 25.1272H55.9359ZM51.0761 29.4546C52.6299 29.4546 53.8781 29.144 54.7351 28.3721C55.6091 27.5849 55.9359 26.448 55.9359 25.1272H54.5359C54.5359 26.2358 54.2637 26.9126 53.7982 27.3318C53.3158 27.7663 52.484 28.0546 51.0761 28.0546V29.4546ZM37.0989 29.4546H51.0761V28.0546H37.0989V29.4546ZM32.239 25.1272C32.239 26.448 32.5658 27.5849 33.4398 28.3721C34.2969 29.144 35.545 29.4546 37.0989 29.4546V28.0546C35.691 28.0546 34.8591 27.7663 34.3767 27.3318C33.9113 26.9126 33.639 26.2358 33.639 25.1272H32.239ZM9.98695 3.03116H12.6493V1.63116H9.98695V3.03116ZM2.60987 16.8516L10.5968 2.67475L9.37708 1.98757L1.39013 16.1644L2.60987 16.8516ZM4.0633 15.808H2V17.208H4.0633V15.808ZM10.7082 3.28548L3.4534 16.1644L4.67319 16.8516L11.928 3.97259L10.7082 3.28548ZM19.1828 16.1644L11.928 3.28548L10.7082 3.97259L17.963 16.8516L19.1828 16.1644ZM20.6362 15.808H18.5729V17.208H20.6362V15.808ZM12.0394 2.67475L20.0263 16.8516L21.2461 16.1644L13.2591 1.98757L12.0394 2.67475ZM27.7912 16.407H25.7945V17.807H27.7912V16.407ZM27.0912 2.33116V17.107H28.4912V2.33116H27.0912ZM25.7945 3.03116H27.7912V1.63116H25.7945V3.03116ZM26.4945 17.107V2.33116H25.0944V17.107H26.4945ZM27.7912 29.7852H2.49918V31.1852H27.7912V29.7852ZM27.0912 19.1038V30.4852H28.4912V19.1038H27.0912ZM2.49918 19.8038H27.7912V18.4038H2.49918V19.8038ZM3.19918 30.4852V19.1038H1.79918V30.4852H3.19918ZM3.79592 20.8343V28.7546H5.19592V20.8343H3.79592ZM25.7945 20.1343H4.49592V21.5343H25.7945V20.1343ZM26.4945 28.7546V20.8343H25.0944V28.7546H26.4945ZM4.49592 29.4546H25.7945V28.0546H4.49592V29.4546Z"
        fill="black"
        mask="url(#path-1-outside-1_1318_454)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71.5128 1.754L70.7457 3.6866L70.682 3.84713L70.178 5.11678C71.7168 4.11352 73.6152 3.50874 75.8311 3.50874C78.4503 3.50874 80.6259 4.35371 82.2885 5.70296L81.5518 3.847L81.4881 3.68651L80.7209 1.75373L80.4005 0.946466C80.0926 0.170921 78.9949 0.170921 78.6871 0.946465C78.3793 1.72201 77.2816 1.72201 76.9738 0.946465C76.6659 0.170921 75.5682 0.171019 75.2604 0.946564C74.9525 1.72218 73.8547 1.72228 73.5468 0.946661C73.2389 0.171047 72.1411 0.171046 71.8333 0.94666L71.5128 1.754Z"
        fill="#66BB6A"
      />
      <path
        d="M81.9702 24.5134C79.1337 29.1304 72.4239 29.1304 69.5874 24.5134L64.6603 16.4935C61.6858 11.6519 65.1694 5.42328 70.8517 5.42328L80.7059 5.42328C86.3882 5.42328 89.8718 11.6519 86.8973 16.4936L81.9702 24.5134Z"
        stroke="#F36E67"
        stroke-width="4"
      />
      <mask
        id="path-5-outside-2_1318_454"
        maskUnits="userSpaceOnUse"
        x="93.0032"
        y="1.32367"
        width="4"
        height="30"
        fill="black">
        <rect fill="white" x="93.0032" y="1.32367" width="4" height="30" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.0032 30.4777H96V2.32367H94.0032V30.4777Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M94.0032 30.4777H96V2.32367H94.0032V30.4777Z"
        fill="black"
      />
      <path
        d="M96 30.4777V31.1777H96.7V30.4777H96ZM94.0032 30.4777H93.3032V31.1777H94.0032V30.4777ZM96 2.32367H96.7V1.62367H96V2.32367ZM94.0032 2.32367V1.62367H93.3032V2.32367H94.0032ZM96 29.7777H94.0032V31.1777H96V29.7777ZM95.3 2.32367V30.4777H96.7V2.32367H95.3ZM94.0032 3.02367H96V1.62367H94.0032V3.02367ZM94.7032 30.4777V2.32367H93.3032V30.4777H94.7032Z"
        fill="black"
        mask="url(#path-5-outside-2_1318_454)"
      />
      <mask
        id="path-7-outside-3_1318_454"
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="57"
        height="31"
        fill="black">
        <rect fill="white" x="1" width="57" height="31" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.9423 17.1736H33.0056L40.094 6.15824L47.1824 17.1736H49.2457L42.0907 6.0584H49.4121V4.32789H41.0924V1H39.0956V4.32789H30.7759V6.0584H38.064L30.9423 17.1736ZM54.7367 17.7726H56.7335V2.33116H54.7367V8.88711H47.8147V10.6176H54.7367V17.7726ZM30.9423 25.1272C30.9423 28.8545 33.2385 30.4852 37.0989 30.4852H51.0761C54.9364 30.4852 57.2327 28.8545 57.2327 25.1272C57.2327 21.4 54.9364 19.7693 51.0761 19.7693H37.0989C33.2385 19.7693 30.9423 21.4 30.9423 25.1272ZM32.939 25.1272C32.939 22.6979 34.1371 21.4998 37.0989 21.4998H51.0761C54.0379 21.4998 55.2359 22.6979 55.2359 25.1272C55.2359 27.5566 54.0379 28.7546 51.0761 28.7546H37.0989C34.1371 28.7546 32.939 27.5566 32.939 25.1272ZM12.6493 2.33116H9.98695L2 16.508H4.0633L11.3181 3.62904L18.5729 16.508H20.6362L12.6493 2.33116ZM25.7945 17.107H27.7912V2.33116H25.7945V17.107ZM2.49918 30.4852H27.7912V19.1038H2.49918V30.4852ZM4.49592 28.7546V20.8343H25.7945V28.7546H4.49592Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.9423 17.1736H33.0056L40.094 6.15824L47.1824 17.1736H49.2457L42.0907 6.0584H49.4121V4.32789H41.0924V1H39.0956V4.32789H30.7759V6.0584H38.064L30.9423 17.1736ZM54.7367 17.7726H56.7335V2.33116H54.7367V8.88711H47.8147V10.6176H54.7367V17.7726ZM30.9423 25.1272C30.9423 28.8545 33.2385 30.4852 37.0989 30.4852H51.0761C54.9364 30.4852 57.2327 28.8545 57.2327 25.1272C57.2327 21.4 54.9364 19.7693 51.0761 19.7693H37.0989C33.2385 19.7693 30.9423 21.4 30.9423 25.1272ZM32.939 25.1272C32.939 22.6979 34.1371 21.4998 37.0989 21.4998H51.0761C54.0379 21.4998 55.2359 22.6979 55.2359 25.1272C55.2359 27.5566 54.0379 28.7546 51.0761 28.7546H37.0989C34.1371 28.7546 32.939 27.5566 32.939 25.1272ZM12.6493 2.33116H9.98695L2 16.508H4.0633L11.3181 3.62904L18.5729 16.508H20.6362L12.6493 2.33116ZM25.7945 17.107H27.7912V2.33116H25.7945V17.107ZM2.49918 30.4852H27.7912V19.1038H2.49918V30.4852ZM4.49592 28.7546V20.8343H25.7945V28.7546H4.49592Z"
        fill="black"
      />
      <path
        d="M33.0056 17.1736V17.6736H33.2784L33.426 17.4441L33.0056 17.1736ZM30.9423 17.1736L30.5213 16.9038L30.0281 17.6736H30.9423V17.1736ZM40.094 6.15824L40.5145 5.88767L40.094 5.23427L39.6735 5.88767L40.094 6.15824ZM47.1824 17.1736L46.762 17.4441L46.9096 17.6736H47.1824V17.1736ZM49.2457 17.1736V17.6736H50.1622L49.6661 16.9029L49.2457 17.1736ZM42.0907 6.0584V5.5584H41.1742L41.6703 6.32903L42.0907 6.0584ZM49.4121 6.0584V6.5584H49.9121V6.0584H49.4121ZM49.4121 4.32789H49.9121V3.82789H49.4121V4.32789ZM41.0924 4.32789H40.5924V4.82789H41.0924V4.32789ZM41.0924 1H41.5924V0.5H41.0924V1ZM39.0956 1V0.5H38.5956V1H39.0956ZM39.0956 4.32789V4.82789H39.5956V4.32789H39.0956ZM30.7759 4.32789V3.82789H30.2759V4.32789H30.7759ZM30.7759 6.0584H30.2759V6.5584H30.7759V6.0584ZM38.064 6.0584L38.485 6.32814L38.9782 5.5584H38.064V6.0584ZM56.7335 17.7726V18.2726H57.2335V17.7726H56.7335ZM54.7367 17.7726H54.2367V18.2726H54.7367V17.7726ZM56.7335 2.33116H57.2335V1.83116H56.7335V2.33116ZM54.7367 2.33116V1.83116H54.2367V2.33116H54.7367ZM54.7367 8.88711V9.38711H55.2367V8.88711H54.7367ZM47.8147 8.88711V8.38711H47.3147V8.88711H47.8147ZM47.8147 10.6176H47.3147V11.1176H47.8147V10.6176ZM54.7367 10.6176H55.2367V10.1176H54.7367V10.6176ZM9.98695 2.33116V1.83116H9.69475L9.55133 2.08574L9.98695 2.33116ZM12.6493 2.33116L13.0849 2.08574L12.9415 1.83116H12.6493V2.33116ZM2 16.508L1.56438 16.2626L1.14442 17.008H2V16.508ZM4.0633 16.508V17.008H4.35551L4.49893 16.7534L4.0633 16.508ZM11.3181 3.62904L11.7537 3.38364L11.3181 2.61028L10.8825 3.38364L11.3181 3.62904ZM18.5729 16.508L18.1373 16.7534L18.2807 17.008H18.5729V16.508ZM20.6362 16.508V17.008H21.4918L21.0718 16.2626L20.6362 16.508ZM27.7912 17.107V17.607H28.2912V17.107H27.7912ZM25.7945 17.107H25.2945V17.607H25.7945V17.107ZM27.7912 2.33116H28.2912V1.83116H27.7912V2.33116ZM25.7945 2.33116V1.83116H25.2945V2.33116H25.7945ZM27.7912 30.4852V30.9852H28.2912V30.4852H27.7912ZM2.49918 30.4852H1.99918V30.9852H2.49918V30.4852ZM27.7912 19.1038H28.2912V18.6038H27.7912V19.1038ZM2.49918 19.1038V18.6038H1.99918V19.1038H2.49918ZM4.49592 20.8343V20.3343H3.99592V20.8343H4.49592ZM4.49592 28.7546H3.99592V29.2546H4.49592V28.7546ZM25.7945 20.8343H26.2945V20.3343H25.7945V20.8343ZM25.7945 28.7546V29.2546H26.2945V28.7546H25.7945ZM33.0056 16.6736H30.9423V17.6736H33.0056V16.6736ZM39.6735 5.88767L32.5851 16.903L33.426 17.4441L40.5145 6.42881L39.6735 5.88767ZM47.6029 16.903L40.5145 5.88767L39.6735 6.42881L46.762 17.4441L47.6029 16.903ZM49.2457 16.6736H47.1824V17.6736H49.2457V16.6736ZM41.6703 6.32903L48.8253 17.4442L49.6661 16.9029L42.5112 5.78777L41.6703 6.32903ZM49.4121 5.5584H42.0907V6.5584H49.4121V5.5584ZM48.9121 4.32789V6.0584H49.9121V4.32789H48.9121ZM41.0924 4.82789H49.4121V3.82789H41.0924V4.82789ZM40.5924 1V4.32789H41.5924V1H40.5924ZM39.0956 1.5H41.0924V0.5H39.0956V1.5ZM39.5956 4.32789V1H38.5956V4.32789H39.5956ZM30.7759 4.82789H39.0956V3.82789H30.7759V4.82789ZM31.2759 6.0584V4.32789H30.2759V6.0584H31.2759ZM38.064 5.5584H30.7759V6.5584H38.064V5.5584ZM31.3633 17.4433L38.485 6.32814L37.643 5.78866L30.5213 16.9038L31.3633 17.4433ZM56.7335 17.2726H54.7367V18.2726H56.7335V17.2726ZM56.2335 2.33116V17.7726H57.2335V2.33116H56.2335ZM54.7367 2.83116H56.7335V1.83116H54.7367V2.83116ZM55.2367 8.88711V2.33116H54.2367V8.88711H55.2367ZM47.8147 9.38711H54.7367V8.38711H47.8147V9.38711ZM48.3147 10.6176V8.88711H47.3147V10.6176H48.3147ZM54.7367 10.1176H47.8147V11.1176H54.7367V10.1176ZM55.2367 17.7726V10.6176H54.2367V17.7726H55.2367ZM37.0989 29.9852C35.2274 29.9852 33.8224 29.5881 32.8916 28.8186C31.9784 28.0636 31.4423 26.8833 31.4423 25.1272H30.4423C30.4423 27.0984 31.0543 28.5971 32.2544 29.5893C33.4367 30.5668 35.1101 30.9852 37.0989 30.9852V29.9852ZM51.0761 29.9852H37.0989V30.9852H51.0761V29.9852ZM56.7327 25.1272C56.7327 26.8833 56.1965 28.0636 55.2834 28.8186C54.3526 29.5881 52.9476 29.9852 51.0761 29.9852V30.9852C53.0649 30.9852 54.7382 30.5668 55.9206 29.5893C57.1207 28.5971 57.7327 27.0984 57.7327 25.1272H56.7327ZM51.0761 20.2693C52.9476 20.2693 54.3526 20.6663 55.2834 21.4359C56.1965 22.1909 56.7327 23.3711 56.7327 25.1272H57.7327C57.7327 23.1561 57.1207 21.6574 55.9206 20.6652C54.7382 19.6877 53.0649 19.2693 51.0761 19.2693V20.2693ZM37.0989 20.2693H51.0761V19.2693H37.0989V20.2693ZM31.4423 25.1272C31.4423 23.3711 31.9784 22.1909 32.8916 21.4359C33.8224 20.6663 35.2274 20.2693 37.0989 20.2693V19.2693C35.1101 19.2693 33.4367 19.6877 32.2544 20.6652C31.0543 21.6574 30.4423 23.1561 30.4423 25.1272H31.4423ZM37.0989 20.9998C35.5659 20.9998 34.3772 21.3073 33.5737 22.031C32.758 22.7656 32.439 23.8368 32.439 25.1272H33.439C33.439 23.9884 33.7191 23.2458 34.2429 22.7741C34.7788 22.2914 35.6701 21.9998 37.0989 21.9998V20.9998ZM51.0761 20.9998H37.0989V21.9998H51.0761V20.9998ZM55.7359 25.1272C55.7359 23.8368 55.4169 22.7656 54.6013 22.031C53.7977 21.3073 52.6091 20.9998 51.0761 20.9998V21.9998C52.5048 21.9998 53.3961 22.2914 53.9321 22.7741C54.4559 23.2458 54.7359 23.9884 54.7359 25.1272H55.7359ZM51.0761 29.2546C52.6091 29.2546 53.7977 28.9472 54.6013 28.2235C55.4169 27.4889 55.7359 26.4177 55.7359 25.1272H54.7359C54.7359 26.2661 54.4559 27.0087 53.9321 27.4804C53.3961 27.9631 52.5048 28.2546 51.0761 28.2546V29.2546ZM37.0989 29.2546H51.0761V28.2546H37.0989V29.2546ZM32.439 25.1272C32.439 26.4177 32.758 27.4889 33.5737 28.2235C34.3772 28.9472 35.5659 29.2546 37.0989 29.2546V28.2546C35.6701 28.2546 34.7788 27.9631 34.2429 27.4804C33.7191 27.0087 33.439 26.2661 33.439 25.1272H32.439ZM9.98695 2.83116H12.6493V1.83116H9.98695V2.83116ZM2.43562 16.7534L10.4226 2.57658L9.55133 2.08574L1.56438 16.2626L2.43562 16.7534ZM4.0633 16.008H2V17.008H4.0633V16.008ZM10.8825 3.38364L3.62766 16.2626L4.49893 16.7534L11.7537 3.87444L10.8825 3.38364ZM19.0086 16.2626L11.7537 3.38364L10.8825 3.87444L18.1373 16.7534L19.0086 16.2626ZM20.6362 16.008H18.5729V17.008H20.6362V16.008ZM12.2136 2.57658L20.2006 16.7534L21.0718 16.2626L13.0849 2.08574L12.2136 2.57658ZM27.7912 16.607H25.7945V17.607H27.7912V16.607ZM27.2912 2.33116V17.107H28.2912V2.33116H27.2912ZM25.7945 2.83116H27.7912V1.83116H25.7945V2.83116ZM26.2945 17.107V2.33116H25.2945V17.107H26.2945ZM27.7912 29.9852H2.49918V30.9852H27.7912V29.9852ZM27.2912 19.1038V30.4852H28.2912V19.1038H27.2912ZM2.49918 19.6038H27.7912V18.6038H2.49918V19.6038ZM2.99918 30.4852V19.1038H1.99918V30.4852H2.99918ZM3.99592 20.8343V28.7546H4.99592V20.8343H3.99592ZM25.7945 20.3343H4.49592V21.3343H25.7945V20.3343ZM26.2945 28.7546V20.8343H25.2945V28.7546H26.2945ZM4.49592 29.2546H25.7945V28.2546H4.49592V29.2546Z"
        fill="black"
        mask="url(#path-7-outside-3_1318_454)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71.5128 1.754L70.7457 3.6866L70.682 3.84713L70.178 5.11678C71.7168 4.11352 73.6152 3.50874 75.8311 3.50874C78.4503 3.50874 80.6259 4.35371 82.2885 5.70296L81.5518 3.847L81.4881 3.68651L80.7209 1.75373L80.4005 0.946466C80.0926 0.170921 78.9949 0.170921 78.6871 0.946465C78.3793 1.72201 77.2816 1.72201 76.9738 0.946465C76.6659 0.170921 75.5682 0.171019 75.2604 0.946564C74.9525 1.72218 73.8547 1.72228 73.5468 0.946661C73.2389 0.171047 72.1411 0.171046 71.8333 0.94666L71.5128 1.754Z"
        fill="#66BB6A"
      />
      <path
        d="M82.1833 24.6443C79.2492 29.4201 72.3085 29.4201 69.3744 24.6443L64.4473 16.6244C61.3705 11.6162 64.9739 5.17328 70.8517 5.17328L80.7059 5.17328C86.5837 5.17328 90.1872 11.6162 87.1103 16.6244L82.1833 24.6443Z"
        stroke="#F36E67"
        stroke-width="3.5"
      />
      <mask
        id="path-11-outside-4_1318_454"
        maskUnits="userSpaceOnUse"
        x="93.0032"
        y="1.32367"
        width="4"
        height="30"
        fill="black">
        <rect fill="white" x="93.0032" y="1.32367" width="4" height="30" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.0034 30.4776H96.0001V2.32362H94.0034V30.4776Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M94.0034 30.4776H96.0001V2.32362H94.0034V30.4776Z"
        fill="black"
      />
      <path
        d="M96.0001 30.4776V30.9776H96.5001V30.4776H96.0001ZM94.0034 30.4776H93.5034V30.9776H94.0034V30.4776ZM96.0001 2.32362H96.5001V1.82362H96.0001V2.32362ZM94.0034 2.32362V1.82362H93.5034V2.32362H94.0034ZM96.0001 29.9776H94.0034V30.9776H96.0001V29.9776ZM95.5001 2.32362V30.4776H96.5001V2.32362H95.5001ZM94.0034 2.82362H96.0001V1.82362H94.0034V2.82362ZM94.5034 30.4776V2.32362H93.5034V30.4776H94.5034Z"
        fill="black"
        mask="url(#path-11-outside-4_1318_454)"
      />
    </svg>
  );
};

export default SimblueLogo;
