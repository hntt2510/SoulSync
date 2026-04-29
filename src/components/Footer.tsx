export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-4 md:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.png" alt="SoulSync" className="h-8 w-auto opacity-95" loading="lazy" />
            </div>
            <p className="text-sm leading-relaxed text-white/55">
              Companion lắng nghe không phán xét — gợi bài thở, nhật ký cảm xúc và không gian Bầu trời chỉ của bạn.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Sản phẩm</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="#features" className="transition hover:text-white/90">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#showcase" className="transition hover:text-white/90">
                  Giao diện
                </a>
              </li>
              <li>
                <a href="#download" className="transition hover:text-white/90">
                  Tải ứng dụng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Đội ngũ</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Pháp lý</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Bảo mật & dữ liệu
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white/90">
                  Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} SoulSync. Mọi quyền được bảo lưu.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <span className="transition hover:text-white/70">Instagram</span>
            <span className="transition hover:text-white/70">X</span>
            <span className="transition hover:text-white/70">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
