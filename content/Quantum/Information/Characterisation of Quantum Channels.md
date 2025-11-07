Let $T:\mathcal{B}(\mathbb{C}^{d})\to \mathcal{B}(\mathbb{C}^{d})$
Then the following are equivalent:
1. $T$ is a [[Quantum/Information/Quantum Channel]]
2. $C\geq 0$ and $\operatorname{Tr}(C)=\mathbb{1} /d$
3. [[Kraus Decomposition]] $T(\rho)=\sum_{k=1}^{dd'}A_{k}\rho A_{k}^{*}$
   with 
$$
\sum_{k=1}^{dd'} A_{k}A_{k}^{*} = \mathbb{1}
$$
4. [[Stinesping Dilation]]
$$
T(\rho)=\operatorname{Tr}_{2}(U(\rho \otimes \ket{\psi} \bra{\psi} )U^{*}) 
$$
with $U$ unitary on $\mathbb{C}^{d}\otimes \mathbb{C}^{d'}\otimes \mathbb{C}^{d'}$
and $\ket{\psi}\in \mathbb{C}^{d'}\otimes \mathbb{C}^{d'}$
[[Quantum/Information/Choi-Jamiolkowski Matrix]]
### Proof (won't be examined)
#### $1\implies 2$

