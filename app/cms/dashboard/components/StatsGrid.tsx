import { motion } from 'framer-motion'

interface Stat {
    title: string
    value: number
    icon: any
    color: string
    change: string
}

interface Props {
    stats: Stat[]
}

export default function StatsGrid({ stats }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-[#EAE7E3]"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                            <stat.icon className="text-white" size={24} />
                        </div>
                        <span className="text-2xl font-bold text-[#333333]">{stat.value}</span>
                    </div>
                    <h3 className="text-sm font-medium text-[#333333] mb-1">{stat.title}</h3>
                    <p className="text-xs text-[#333333] opacity-60">{stat.change}</p>
                </motion.div>
            ))}
        </div>
    )
}
