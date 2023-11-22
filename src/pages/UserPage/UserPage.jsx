import Chat from './Components/Chat/Chat'
import { Services } from './Components/Services'
export const UserPage = () => {
	return (
		<>
			<div className="min-h-screen">
				<section className="relative isolate overflow-hidden dark:bg-slate-800/20 bg-white px-6 py-24 sm:py-32 lg:px-8">
					<div className="absolute inset-0 opacity-20" />
					<div className="absolute inset-y-0 md:right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] dark:bg-cyan-950 dark:opacity-20 bg-white shadow-xl dark:shadow-gray-300 shadow-indigo-600/20 md:shadow-indigo-600/30 ring-1 dark:ring-gray-800 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
					<div className="mx-auto max-w-2xl lg:max-w-4xl">
						<img
							className="mx-auto h-12"
							src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
							alt=""
						/>
						<figure className="mt-10">
							<blockquote className="text-center text-xl font-semibold leading-8 dark:text-gray-300 text-gray-900 sm:text-2xl sm:leading-9">
								<p>
									“Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Nemo expedita voluptas culpa sapiente alias
									molestiae. Numquam corrupti in laborum sed rerum et
									corporis.”
								</p>
							</blockquote>
							<figcaption className="mt-10">
								<img
									className="mx-auto h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
								<div className="mt-4 flex items-center justify-center space-x-3 text-base">
									<div className="font-semibold text-gray-900 dark:text-gray-400">
										Judith Black
									</div>
									<svg
										viewBox="0 0 2 2"
										width={3}
										height={3}
										aria-hidden="true"
										className="fill-gray-900 dark:fill-gray-400"
									>
										<circle cx={1} cy={1} r={1} />
									</svg>
									<div className="text-gray-600 dark:text-indigo-500/90">
										CEO of Workcation
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</section>
				<hr
					className="
				border-indigo-300/40 dark:border-gray-800 mx-4
				"
				/>
				<Services />
			</div>
		</>
	)
}
