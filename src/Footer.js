export default function Example() {
    return (
      <div className="bg-emerald-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                <p className="mt-4 leading-7 text-white">
                  Use the link to join our group chat and get directions to the field as well
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">WhatsApp</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">WhatsApp</dt>
                      <dd>
                        <a
                          href="https://chat.whatsapp.com/B8nHcZ3zFYA8FBspHta4fV"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-indigo-600"
                        >
                          Join WhatsApp Group
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Address</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Location</dt>
                      <dd>
                        <a
                          href="https://www.google.com/maps/place/11111+N+30th+St,+Tampa,+FL+33612"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-indigo-600"
                        >
                          TMSL Field - 11111 N 30th St, Tampa, FL 33612
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
