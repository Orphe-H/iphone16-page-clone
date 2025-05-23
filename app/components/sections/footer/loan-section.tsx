"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function LoanSection() {
	const [isGridOpen, setIsGridOpen] = useState(false);

	const toogleGrid = () => setIsGridOpen(!isGridOpen);

	return (
		<div className="bg-black py-12 flex justify-center flex-col space-y-8  px-10 md:px-20 xl:px-30">
			<p className="text-center font-bold">
				Un crédit vous engage et doit être remboursé.
				<br />
				Vérifiez vos capacités de remboursement avant de vous engager.
			</p>
			<div>
				<p className="text-center font-semibold">
					Exemple d’achat avec Cetelem
				</p>
				<div
					className="mt-4 flex justify-between cursor-pointer text-[#9b9b9c] hover:text-gray-500"
					onClick={toogleGrid}
				>
					<div className="text-white font-semibold">
						pendant 36 mois au taux débiteur de 0%
					</div>
					<div>
						<i
							className={`fa-solid fa-chevron-down transition-transform duration-400 ${
								isGridOpen ? "rotate-x-180" : ""
							}`}
						></i>
					</div>
				</div>
				<AnimatePresence>
					{isGridOpen && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className="my-4 grid grid-cols-2 md:grid-cols-3 xl:auto-cols-max xl:grid-flow-col xl:grid-cols-none gap-28"
						>
							<div>
								<div>Prix d’achat</div>
								<div>1 500,00 €</div>
							</div>
							<div>
								<div>TAEG fixe</div>
								<div>0 %</div>
							</div>
							<div>
								<div>Taux débiteur</div>
								<div>0 %</div>
							</div>
							<div>
								<div>Montant total des intérêts</div>
								<div>0,00 €</div>
							</div>
							<div>
								<div>Montant total financé</div>
								<div>1 500,00 €</div>
							</div>
							<div>
								<div>Durée</div>
								<div>36 mois</div>
							</div>
							<div>
								<div>Mensualité</div>
								<div>41,67 €</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className="mt-4 text-xs flex flex-col text-center">
				<p>
					Dans cet exemple, le montant indiqué n’inclut pas les frais
					d’expédition ni les accessoires qui ne peuvent pas faire
					l’objet d’un financement. Le cas échéant, ces frais seront
					perçus en une seule fois par le biais de Cetelem. Toutes les
					conditions de cet exemple concernent le financement d’un
					seul article. Tous les taux ne s’appliquent pas à tous les
					produits.
				</p>
				<p className="mt-3">
					Tous les taux d’intérêt affichés sont les taux maximums
					possibles. Conformément à la réglementation sur les taux
					d’usure, des taux d’intérêt plus bas peuvent vous être
					proposés en fonction du montant de votre commande. Cetelem
					communiquera les taux définitifs lors de votre demande.
				</p>
			</div>
		</div>
	);
}
