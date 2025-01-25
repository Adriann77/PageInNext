import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';

export default function VerifyEmail({ code }: { code: string }) {
  return (
    <Html lang='pl'>
      <Head />
      <Tailwind>
        <Body className='font-sans'>
          <Container className='bg-gray-950 rounded-lg text-center py-8 px-4 mt-12'>
            <svg
              className='w-40 h-10'
              width='190'
              height='48'
              viewBox='0 0 190 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 4C3.58172 4 0 7.58172 0 12V36C0 40.4183 3.58172 44 8 44H32C36.4183 44 40 40.4183 40 36V12C40 7.58172 36.4183 4 32 4H8ZM11 19.5H20.9645L9.23223 31.2322L12.7678 34.7678L24.5 23.0355V33H29.5V17C29.5 15.6193 28.3807 14.5 27 14.5H11V19.5Z'
                fill='#E5E7EB'
              />
              <path
                d='M57.657 35H52.7138L60.2457 13.1818H66.1903L73.7116 35H68.7685L63.3033 18.1676H63.1328L57.657 35ZM57.348 26.424H69.0241V30.0249H57.348V26.424ZM82.0842 35.3196C80.4081 35.3196 78.9663 34.9645 77.7589 34.2543C76.5587 33.5369 75.6354 32.5426 74.9891 31.2713C74.3499 30 74.0303 28.5369 74.0303 26.8821C74.0303 25.206 74.3534 23.7358 74.9997 22.4716C75.6531 21.2003 76.58 20.2095 77.7803 19.4993C78.9805 18.782 80.4081 18.4233 82.0629 18.4233C83.4905 18.4233 84.7405 18.6825 85.8129 19.201C86.8854 19.7195 87.7341 20.4474 88.3591 21.3849C88.9841 22.3224 89.3286 23.4233 89.3925 24.6875H85.1098C84.9891 23.8707 84.6695 23.2138 84.151 22.7166C83.6396 22.2124 82.9685 21.9602 82.1375 21.9602C81.4344 21.9602 80.82 22.152 80.2945 22.5355C79.776 22.9119 79.3712 23.4624 79.08 24.1868C78.7888 24.9112 78.6432 25.7884 78.6432 26.8182C78.6432 27.8622 78.7852 28.75 79.0693 29.4815C79.3605 30.2131 79.7689 30.7706 80.2945 31.1541C80.82 31.5376 81.4344 31.7294 82.1375 31.7294C82.656 31.7294 83.1212 31.6229 83.5331 31.4098C83.9521 31.1967 84.2966 30.8878 84.5665 30.483C84.8435 30.071 85.0246 29.5774 85.1098 29.0021H89.3925C89.3214 30.2521 88.9805 31.353 88.3697 32.3047C87.7661 33.2493 86.9315 33.9879 85.8662 34.5206C84.8009 35.0533 83.5402 35.3196 82.0842 35.3196ZM98.8917 35.3196C97.2368 35.3196 95.8057 34.968 94.5983 34.2649C93.398 33.5547 92.4712 32.5675 91.8178 31.3033C91.1644 30.032 90.8377 28.5582 90.8377 26.8821C90.8377 25.1918 91.1644 23.7145 91.8178 22.4503C92.4712 21.179 93.398 20.1918 94.5983 19.4886C95.8057 18.7784 97.2368 18.4233 98.8917 18.4233C100.546 18.4233 101.974 18.7784 103.174 19.4886C104.382 20.1918 105.312 21.179 105.966 22.4503C106.619 23.7145 106.946 25.1918 106.946 26.8821C106.946 28.5582 106.619 30.032 105.966 31.3033C105.312 32.5675 104.382 33.5547 103.174 34.2649C101.974 34.968 100.546 35.3196 98.8917 35.3196ZM98.913 31.804C99.6658 31.804 100.294 31.5909 100.799 31.1648C101.303 30.7315 101.683 30.142 101.939 29.3963C102.201 28.6506 102.333 27.8018 102.333 26.8501C102.333 25.8984 102.201 25.0497 101.939 24.304C101.683 23.5582 101.303 22.9687 100.799 22.5355C100.294 22.1023 99.6658 21.8857 98.913 21.8857C98.153 21.8857 97.5138 22.1023 96.9953 22.5355C96.484 22.9687 96.0969 23.5582 95.8341 24.304C95.5784 25.0497 95.4506 25.8984 95.4506 26.8501C95.4506 27.8018 95.5784 28.6506 95.8341 29.3963C96.0969 30.142 96.484 30.7315 96.9953 31.1648C97.5138 31.5909 98.153 31.804 98.913 31.804ZM119.59 28.0327V18.6364H124.129V35H119.771V32.0277H119.601C119.232 32.9865 118.617 33.7571 117.758 34.3395C116.906 34.9219 115.865 35.2131 114.636 35.2131C113.543 35.2131 112.58 34.9645 111.749 34.4673C110.918 33.9702 110.268 33.2635 109.8 32.3473C109.338 31.4311 109.104 30.3338 109.097 29.0554V18.6364H113.635V28.2457C113.642 29.2116 113.901 29.9751 114.413 30.5362C114.924 31.0973 115.609 31.3778 116.469 31.3778C117.016 31.3778 117.527 31.2536 118.003 31.005C118.479 30.7493 118.862 30.3729 119.153 29.8757C119.452 29.3786 119.597 28.7642 119.59 28.0327ZM131.497 25.5398V35H126.959V18.6364H131.284V21.5234H131.476C131.838 20.5717 132.445 19.8189 133.298 19.2649C134.15 18.7038 135.183 18.4233 136.398 18.4233C137.534 18.4233 138.525 18.6719 139.37 19.169C140.215 19.6662 140.872 20.3764 141.341 21.2997C141.81 22.2159 142.044 23.3097 142.044 24.581V35H137.506V25.3906C137.513 24.3892 137.257 23.608 136.739 23.0469C136.22 22.4787 135.506 22.1946 134.597 22.1946C133.986 22.1946 133.447 22.326 132.978 22.5888C132.516 22.8516 132.154 23.2351 131.891 23.7393C131.636 24.2365 131.504 24.8366 131.497 25.5398ZM153.525 18.6364V22.0455H143.67V18.6364H153.525ZM145.907 14.7159H150.446V29.9716C150.446 30.3906 150.51 30.7173 150.638 30.9517C150.765 31.179 150.943 31.3388 151.17 31.4311C151.405 31.5234 151.675 31.5696 151.98 31.5696C152.193 31.5696 152.406 31.5518 152.619 31.5163C152.832 31.4737 152.996 31.4418 153.109 31.4205L153.823 34.7976C153.596 34.8686 153.276 34.9503 152.864 35.0426C152.452 35.142 151.952 35.2024 151.362 35.2237C150.268 35.2663 149.309 35.1207 148.486 34.7869C147.669 34.4531 147.033 33.9347 146.579 33.2315C146.124 32.5284 145.9 31.6406 145.907 30.5682V14.7159ZM162.963 35.3196C161.279 35.3196 159.831 34.9787 158.616 34.2969C157.409 33.608 156.478 32.6349 155.825 31.3778C155.171 30.1136 154.845 28.6186 154.845 26.8928C154.845 25.2095 155.171 23.7322 155.825 22.4609C156.478 21.1896 157.398 20.1989 158.584 19.4886C159.777 18.7784 161.176 18.4233 162.781 18.4233C163.861 18.4233 164.866 18.5973 165.796 18.9453C166.734 19.2862 167.551 19.8011 168.247 20.4901C168.95 21.179 169.497 22.0455 169.887 23.0895C170.278 24.1264 170.473 25.3409 170.473 26.733V27.9794H156.656V25.1669H166.201C166.201 24.5135 166.059 23.9347 165.775 23.4304C165.491 22.9261 165.097 22.532 164.593 22.2479C164.095 21.9567 163.517 21.8111 162.856 21.8111C162.167 21.8111 161.556 21.9709 161.024 22.2905C160.498 22.603 160.086 23.0256 159.788 23.5582C159.49 24.0838 159.337 24.6697 159.33 25.3161V27.9901C159.33 28.7997 159.479 29.4993 159.777 30.0888C160.083 30.6783 160.512 31.1328 161.066 31.4524C161.62 31.772 162.277 31.9318 163.037 31.9318C163.541 31.9318 164.003 31.8608 164.422 31.7188C164.841 31.5767 165.2 31.3636 165.498 31.0795C165.796 30.7955 166.024 30.4474 166.18 30.0355L170.377 30.3125C170.164 31.321 169.728 32.2017 169.067 32.9545C168.414 33.7003 167.568 34.2827 166.531 34.7017C165.502 35.1136 164.312 35.3196 162.963 35.3196ZM172.635 35V18.6364H177.035V21.4915H177.205C177.504 20.4759 178.004 19.7088 178.707 19.1903C179.41 18.6648 180.22 18.402 181.136 18.402C181.364 18.402 181.609 18.4162 181.871 18.4446C182.134 18.473 182.365 18.5121 182.564 18.5618V22.5888C182.351 22.5249 182.056 22.468 181.68 22.4183C181.303 22.3686 180.959 22.3438 180.646 22.3438C179.979 22.3438 179.382 22.4893 178.857 22.7805C178.338 23.0646 177.926 23.4624 177.621 23.9737C177.322 24.4851 177.173 25.0746 177.173 25.7422V35H172.635ZM184.888 35.277C184.185 35.277 183.581 35.0284 183.077 34.5312C182.58 34.027 182.331 33.4233 182.331 32.7202C182.331 32.0241 182.58 31.4276 183.077 30.9304C183.581 30.4332 184.185 30.1847 184.888 30.1847C185.57 30.1847 186.166 30.4332 186.678 30.9304C187.189 31.4276 187.445 32.0241 187.445 32.7202C187.445 33.1889 187.324 33.6186 187.083 34.0092C186.848 34.3928 186.539 34.7017 186.156 34.9361C185.772 35.1634 185.35 35.277 184.888 35.277Z'
                fill='#E5E7EB'
              />
            </svg>
            <Heading className='text-gray-200 text-2xl font-semibold'>
              Potwierdź swój adres email
            </Heading>
            <Text className='text-gray-200 text-base'>Wprowadź poniższy kod weryfikacyjny, aby potwierdzić swój adres email</Text>
            <Text className='text-base font-semibold text-gray-200'>Kod</Text>
            <Text className='text-4xl font-semibold text-gray-200 tracking-widest'>123456</Text>
            <Text className='text-base text-gray-200'>Kod jest ważny przez 60 minut</Text>
            <Text className='text-gray-200 text-sm italic'>Ta wiadomość została wygenerowana automatycznie</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
