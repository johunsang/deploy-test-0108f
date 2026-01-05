import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm">
          ← 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold text-white mt-4 mb-2">이용약관</h1>
        <p className="text-gray-400">최종 수정일: 2024년 1월 1일</p>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제1조 (목적)</h2>
            <p className="text-gray-300 leading-relaxed">
              이 약관은 OneSaaS(이하 &quot;회사&quot;)가 제공하는 서비스의 이용조건 및 절차,
              회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제2조 (정의)</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>&quot;서비스&quot;란 회사가 제공하는 모든 온라인 서비스를 말합니다.</li>
              <li>&quot;회원&quot;이란 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결한 고객을 말합니다.</li>
              <li>&quot;아이디(ID)&quot;란 회원의 식별과 서비스 이용을 위하여 회원이 정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
            <p className="text-gray-300 leading-relaxed">
              ① 이 약관은 서비스를 통하여 이를 공지하거나 전자우편, 기타의 방법으로 회원에게 통지함으로써 효력을 발생합니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              ② 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제4조 (서비스의 제공)</h2>
            <p className="text-gray-300 leading-relaxed">
              회사는 회원에게 아래와 같은 서비스를 제공합니다:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
              <li>SaaS 프로젝트 생성 및 관리</li>
              <li>결제 시스템 연동</li>
              <li>사용자 인증 시스템</li>
              <li>관리자 대시보드</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제5조 (회원가입)</h2>
            <p className="text-gray-300 leading-relaxed">
              ① 서비스를 이용하고자 하는 자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              ② 회사는 제1항과 같이 회원으로 가입할 것을 신청한 자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제6조 (회원 탈퇴 및 자격 상실)</h2>
            <p className="text-gray-300 leading-relaxed">
              ① 회원은 언제든지 서비스 내 설정 메뉴를 통해 탈퇴를 요청할 수 있으며, 회사는 즉시 회원탈퇴를 처리합니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              ② 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제7조 (개인정보보호)</h2>
            <p className="text-gray-300 leading-relaxed">
              회사는 회원의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.
              자세한 내용은 <Link href="/privacy" className="text-purple-400 hover:text-purple-300">개인정보처리방침</Link>을 참조하세요.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제8조 (면책조항)</h2>
            <p className="text-gray-300 leading-relaxed">
              ① 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              ② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">제9조 (분쟁해결)</h2>
            <p className="text-gray-300 leading-relaxed">
              ① 회사와 회원 간에 발생한 분쟁에 관한 소송은 대한민국 법률에 따릅니다.
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              ② 회사와 회원 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
