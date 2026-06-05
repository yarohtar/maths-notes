Usually we expand in countable orthonormal basis $\ket{\psi}=\sum_{m}a_{m}\ket{\psi_{m}}$ and $\braket{ \phi_{n} | \phi_{m} } =\delta_{nm}$

Sometimes we generalize this to continuum states

Consider $L^2(\mathbb{R},dx)$ ie the space of integrable functions over $\mathbb{R}$.
For $x\in \mathbb{R}$ let $\ket{x}$ be a position vector.
Define operator $X\ket{\psi}=x\ket{\psi}$ and $\braket{ x' | x }=\delta(x-x')$
Formally this wouldn't really be allowed to be in our $\mathcal{H}$ because they are not normalizable. We would need to include distributions but we just kinda glance over that.

Then we can expand any vector as
$$
\ket{\psi} = \int_{\mathbb{R}}\psi(x')\ket{x'} dx'
$$
Note that here $\psi(x')$ is the $\ket{x'}$ coordinate of the vector $\ket{\psi}$.

We extract the wavefunction by projecting on $\ket{x}$
$$
\braket{ x | \psi } =\int \psi(x')\braket{ x | x' } dx'=\int \psi(x')\delta(x-x')dx'=\psi(x)
$$
