Let $\Pi_{n}$ be the space of all bi-infinite complex $n$-periodic sequences $x=\{ x_{l} \}_{l\in \mathbb{Z}}$ (such that $x_{l+n}=x_{l}$). Set $\omega_{n}=\exp \frac{2\pi i}{n}$ the primitive root of unity of degree $n$. The discrete Fourier transform (DFT) of $x$ is $\mathcal{F}_{n}:\Pi_{n}\to \Pi_{n}$
such that
$$
(\mathcal{F}_{n}x)_{j}=\frac{1}{n}\sum_{l=0}^{n-1} \omega_{n}^{-jl}x_{l}
$$
where $j=0\dots n-1$ (note that this does define the whole sequence uniquely).

### Theorem
$\mathcal{F}_{n}$ is an isomorphism of $\Pi_{n}$ to itself with inverse:
$(\mathcal{F}^{-1}_{n}y)_{l}=$

[[XNotes/Fast Fourier Transform]]