export let timeout = (time, f) => {
    return () => setTimeout(f, time)
}

