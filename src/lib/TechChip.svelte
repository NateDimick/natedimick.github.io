<script lang=ts>
    export let text: string = ""

    const colors = new Map<string, string>([
        ["go", "bg-[#00ADD8]"],
        ["svelte", "bg-[#FF3E00]"],
        ["aws", "bg-[#FF9900]"],
        ["azure", "bg-[#0078D4]"],
        ["kubernetes", "bg-[#326CE5]"],
        ["terraform", "bg-[#7B42BC]"],
        ["helm", "bg-[#090E6F]"],
        ["python", "bg-[#4584B6]"],
        ["java", "bg-[#FFA518]"],
        ["javascript", "bg-[#F7DF1E]"],
        ["typescript", "bg-[#3178C6]"],
        ["bash", "bg-[#008000]"],
        ["wails", "bg-[#DF0000]"],
        ["mongodb", "bg-[#4DB33D]"],
        ["surrealdb", "bg-[#9500FF]"],
        ["redis", "bg-[#D82C20]"],
        ["nats", "bg-[#66DCFA]"],
        ["templ", "bg-[#66DCFA]"],
        ["docker", "bg-[#1D63ED]"],
        ["nodejs", "bg-[#6CC24A]"]
    ])
    const whiteText: string[] = [
        "azure",
        "bash",
        "docker",
        "helm",
        "kubernetes",
        "python",
        "surrealdb",
        "redis",
        "wails"
    ]
    let color: string | undefined = colors.get(text)
    if (color === undefined) {
        color = "bg-accent"
    }
    let textColor: string = "text-black"
    if (whiteText.includes(text)) {
        textColor = "text-neutral"
    }
</script>

<span class="badge {color} {textColor}">{text}</span>