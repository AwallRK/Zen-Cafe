interface Contact {
    _id?: string
    id?: string
    name: string
    email: string
    message: string
}

interface Props {
    contactsData: Contact[]
}

export default function ContactsTable({ contactsData }: Props) {
    return (
        <div className="p-6">
            <h2 className="text-xl font-medium text-[#333333] mb-4">Contact Messages</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4">Name</th>
                            <th className="text-left p-4">Email</th>
                            <th className="text-left p-4">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactsData.map(contact => (
                            <tr key={contact._id || contact.id} className="border-b">
                                <td className="p-4">{contact.name}</td>
                                <td className="p-4">{contact.email}</td>
                                <td className="p-4">{contact.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
