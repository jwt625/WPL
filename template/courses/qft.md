## Quantum Field Theory

### Chpt1: Intro
- Klein-Gordon Equation

<p>
	$$
	\frac{\partial^2 \phi}{\partial t^2} = c^2\left( \nabla^2- \frac{m^2c^2}{\hbar^2} \right) \phi
	$$
	$$
	(\partial^2 + m^2 ) \phi
	$$
	$$
	\partial_\mu \equiv \frac{\partial}{\partial x^\mu} = \left( +\frac{1}{c} \frac{\partial }{\partial t}, \nabla \right)
	$$
	$$
	\partial^\mu \equiv \frac{\partial}{\partial x_\mu}  = \left( -\frac{1}{c} \frac{\partial }{\partial t}, \nabla \right)
	$$
</p>
- probability not conserved

- Dirac Equation: Spin-1/2 Particles

<p>
	$$
	\frac{\partial}{\partial t} \psi + c( \vec \alpha \cdot \nabla + i \frac{mc}{\hbar} \beta ) \psi = 0 \Rightarrow (i \gamma^\mu \partial_\mu -m ) \psi = 0
	$$
</p>
with prob cons: $ \frac{\partial }{\partial t} \rho + \nabla \cdot \vec j = 0 $, $\vec j = c \psi^\dagger \vec \alpha \psi $

- QFT of QM: see Srednicki

### Chpt2: 

- Lorentz Trans:

<p>
	$$
	\left(\begin{array}{cccc}
	\cosh \phi& -\sinh \phi &0&0\\
	-\sinh \phi & \cosh \phi &0&0\\
	0&0&0&0\\
	0&0&0&0
	\end{array}\right), \cosh \phi = \frac{1}{\sqrt{1-v^2}}
	$$
</p>

- Infinitesimal LT:

<p>
	$$
	\Lambda^\mu_\nu = g^{\mu}_{\nu}+ \omega^{\mu}_{\nu},
	\omega^{\mu}_{\nu} = \left(
	\begin{array}{cccc}
	0&-v^1&-v^2&-v^3\\
	-v^1&0& \theta^3&-\theta^2\\
	-v^2&-\theta^3&0&\theta^1\\
	-v^3&\theta^2&-\theta^1&0
	\end{array}
	\right), \omega^{\mu \nu} = \left(
	\begin{array}{cccc}
	0&v^1&v^2&v^3\\
	-v^1&0& -\theta^3&\theta^2\\
	-v^2&\theta^3&0&-\theta^1\\
	-v^3&-\theta^2&\theta^1&0
	\end{array}
	\right), 
	\left\{\begin{array}{l}
	\omega^{0k} = -\omega^{k0}=v^k\\
	 \omega^{ij} = - \omega^{ji} = - \epsilon^{ijk} \theta^k
	\end{array}\right.
	$$
</p>



