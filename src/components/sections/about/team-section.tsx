'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { Linkedin, Twitter, Quote } from 'lucide-react';

const teamMembers = [
	{
		name: 'Ronald Beinomugisha',
		role: 'Chief Executive Officer',
		image: '/images/Beinomugisha-Ronald.JPG',
		bio: 'Visionary leader driving inclusive digital transformation across Africa through innovative technology solutions and strategic partnerships.',
		message: `At Threshold Collective, we believe Africa's digital transformation must be inclusive
by design. For too long, digital systems—procurement platforms, AI tools, and e-
governance solutions—have excluded women, Persons with Disabilities (PWDs), and
informal sector players. Our mission is to rewrite that story.

We are not just a lab; we are a think-and-do tank that designs, tests, and
implements digital rails across sectors such as governance, commerce, health, water,
sports, and industry. By bridging research and practice, we ensure that technology
adoption grows faster than complexity, keeping governments, SMEs, and communities
ahead of the curve.

What makes us unique is our Lab + Rails Model: we don't just talk about inclusion—we
build the systems that governments and corporations run on. Every rail we design is
anchored on fairness, competitiveness, and accessibility.

My vision as CEO is clear: a continent where digital rails empower every
player—youth, women, PWDs, governments, and businesses—to compete fairly and
prosper in the digital economy. Together, we are laying the foundations for Africa's
inclusive digital future.

Ronald Beinomugisha,
Chief Executive Officer,
Threshold Collective.`,
		social: {
			linkedin: 'https://linkedin.com/',
			twitter: 'https://twitter.com/',
		},
	},
	{
		name: 'Kezia Kukiriza',
		role: 'Innovation Director',
		image: '/images/Kezia-Kukiriza.jpg',
		bio: 'Leading the development of cutting-edge solutions that bridge technology gaps and create inclusive digital ecosystems across Africa.',
		social: {
			linkedin: 'https://linkedin.com/',
			twitter: 'https://twitter.com/',
		},
	},
	{
		name: 'Mukisa Timothy',
		role: 'Marketing Director',
		image: '/images/Mukisa-Timothy.jpg',
		bio: 'Strategic marketing leader crafting compelling narratives around digital transformation and driving engagement across diverse stakeholder groups.',
		social: {
			linkedin: 'https://linkedin.com/',
			twitter: 'https://twitter.com/',
		},
	},
];

export function TeamSection() {
	return (
		<section id="team" className="py-24 bg-muted/30">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Meet Our Team
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						The innovators and thought leaders driving Africa&apos;s digital
						transformation.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<Card className="overflow-hidden group">
								<div className="relative">
									<div className="aspect-[4/5] relative overflow-hidden">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover transform group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
									{member.message && (
										<Dialog>
											<DialogTrigger asChild>
												<button className="absolute bottom-4 right-4 w-12 h-12 bg-brand-rust rounded-full flex items-center justify-center text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
													<Quote className="w-6 h-6" />
												</button>
											</DialogTrigger>
											<DialogContent className="max-w-2xl">
												<DialogHeader>
													<DialogTitle className="text-2xl font-bold mb-4">
														CEO&apos;s Message
													</DialogTitle>
												</DialogHeader>
												<div className="prose prose-lg dark:prose-invert">
													{member.message
														.split('\n\n')
														.map((paragraph, i) => (
															<p
																key={i}
																className="mb-4 text-muted-foreground leading-relaxed"
															>
																{paragraph}
															</p>
														))}
												</div>
											</DialogContent>
										</Dialog>
									)}
								</div>
								<CardContent className="p-6">
									<div className="flex justify-between items-start mb-4">
										<div>
											<h3 className="text-xl font-bold mb-1">
												{member.name}
											</h3>
											<p className="text-brand-rust font-medium">
												{member.role}
											</p>
										</div>
										<div className="flex gap-2">
											<a
												href={member.social.linkedin}
												target="_blank"
												rel="noopener noreferrer"
												className="text-muted-foreground hover:text-brand-digital transition-colors"
											>
												<Linkedin className="w-5 h-5" />
											</a>
											<a
												href={member.social.twitter}
												target="_blank"
												rel="noopener noreferrer"
												className="text-muted-foreground hover:text-brand-digital transition-colors"
											>
												<Twitter className="w-5 h-5" />
											</a>
										</div>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										{member.bio}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
